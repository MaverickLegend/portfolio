export interface Certificate {
  title: string;
  subtitle: string;
  description: string;
  link: string;
  image: string;
}

export interface Projects {
  title: string;
  viewProject: string;
  viewCode: string;
  items: ProjectItem[];
}

export interface ProjectItem {
  title: string;
  description: string;
  image: string;
  url: string;
  repo: string;
  technologies: Technology[];
}
export interface Section {
  id: number;
  name: string;
  url: string;
}

export interface Contact {
  title: string;
  contactForm: ContactField[];
}

export interface ContactField {
  id: string;
  label: string;
  placeholder: string;
  type: string;
  required: boolean;
}

export interface Presentation {
  hello: string;
  name: string;
  alias: string;
  webdeveloper: string;
}

export interface About {
  title: string;
  description: string;
}

export interface Technology {
  title: string;
  icon: string;
  color: string;
}

export interface Content {
  presentation: Presentation;
  about: About;
  certificates: Certificate[];
  projects: Projects;
  contact: Contact;
  sections: Section[];
  skills: {
    title: string;
  };
  settings: {
    darkmode: string;
    lightmode: string;
    english: string;
    spanish: string;
  };
}

export interface Language {
  id: number;
  name: string;
  code: string;
  icon: string;
  content: Content;
  cv: string;
}
