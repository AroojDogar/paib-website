export type Project = {
  slug: string;
  name: string;
  description: string;
  category: "AI" | "Agentic AI" | "Automation" | "Web" | "Blockchain" | "Analytics";
  technologies: string[];
  image?: string;
  creator?: string;
  date?: string;
  featured?: boolean;
  url?: string;
  github?: string;
};

// Empty until PAIB confirms real projects.
export const projects: Project[] = [];