#!/usr/bin/env node

/**
 * Script para convertir todas las imágenes PNG a WebP
 * Usa ImageMagick (convert) que ya está instalado en el sistema
 * 
 * Uso: node convert-images.mjs
 */

import { readdir, unlink, stat } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);
const __dirname = dirname(fileURLToPath(import.meta.url));

const projectsDir = join(__dirname, 'public', 'assets', 'img', 'projects');

async function getAllPngFiles(dir) {
  const files = [];
  
  async function walk(currentDir) {
    const entries = await readdir(currentDir, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = join(currentDir, entry.name);
      
      if (entry.isDirectory()) {
        await walk(fullPath);
      } else if (entry.name.endsWith('.png')) {
        files.push(fullPath);
      }
    }
  }
  
  await walk(dir);
  return files;
}

async function getFileSize(filePath) {
  try {
    const stats = await stat(filePath);
    const sizeInMB = stats.size / (1024 * 1024);
    return sizeInMB;
  } catch {
    return 0;
  }
}

function formatSize(mb) {
  if (mb < 1) {
    return `${(mb * 1024).toFixed(0)}K`;
  }
  return `${mb.toFixed(1)}M`;
}

async function convertToWebp(pngPath) {
  const webpPath = pngPath.replace('.png', '.webp');
  
  try {
    // Usar ImageMagick convert (ya instalado)
    // -quality 80 para WebP de buena calidad
    await execAsync(`convert "${pngPath}" -quality 80 "${webpPath}"`);
    
    const fileName = pngPath.split('/').slice(-2).join('/');
    const originalSize = await getFileSize(pngPath);
    const newSize = await getFileSize(webpPath);
    const saved = ((originalSize - newSize) / originalSize * 100).toFixed(0);
    
    console.log(`✓ ${fileName.padEnd(30)} ${formatSize(originalSize)} → ${formatSize(newSize)} (${saved}% menor)`);
    return true;
  } catch (error) {
    console.error(`✗ Error: ${pngPath.split('/').slice(-2).join('/')}`);
    return false;
  }
}

async function main() {
  console.log('🔍 Buscando imágenes PNG en proyectos...\n');
  
  const pngFiles = await getAllPngFiles(projectsDir);
  
  if (pngFiles.length === 0) {
    console.log('✓ No se encontraron archivos PNG para convertir.');
    return;
  }
  
  console.log(`📦 Encontrados ${pngFiles.length} archivos PNG\n`);
  
  // Calcular tamaño total antes
  let totalSizeBefore = 0;
  console.log('📊 Tamaños originales:\n');
  for (const file of pngFiles) {
    const size = await getFileSize(file);
    totalSizeBefore += size;
    console.log(`  ${formatSize(size).padStart(6)} - ${file.split('/').slice(-2).join('/')}`);
  }
  
  console.log(`\n  Total: ${formatSize(totalSizeBefore)}`);
  console.log('\n🔄 Convirtiendo a WebP (quality: 80)...\n');
  
  let successCount = 0;
  let totalSizeAfter = 0;
  
  for (const pngFile of pngFiles) {
    const success = await convertToWebp(pngFile);
    if (success) {
      successCount++;
      const webpPath = pngFile.replace('.png', '.webp');
      totalSizeAfter += await getFileSize(webpPath);
      // Borrar PNG original
      await unlink(pngFile);
    }
  }
  
  const savedMB = totalSizeBefore - totalSizeAfter;
  const savedPercent = ((savedMB / totalSizeBefore) * 100).toFixed(1);
  
  console.log(`\n✅ Conversión completada: ${successCount}/${pngFiles.length} archivos`);
  console.log(`💾 Espacio ahorrado: ${formatSize(savedMB)} (${savedPercent}%)`);
  console.log(`📉 Tamaño final: ${formatSize(totalSizeBefore)} → ${formatSize(totalSizeAfter)}`);
  console.log('\n✓ Archivos PNG originales eliminados.');
}

main().catch(console.error);
