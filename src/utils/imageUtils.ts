/**
 * Generates an array of image paths based on folder name and count
 * @param imageFolder - The folder name under /assets/img/projects/
 * @param imageCount - Number of images (1.webp, 2.webp, etc.)
 * @returns Array of image paths
 */
export function generateProjectImages(
  imageFolder: string,
  imageCount: number
): string[] {
  return Array.from(
    { length: imageCount },
    (_, i) => `/assets/img/projects/${imageFolder}/${i + 1}.webp`
  );
}
