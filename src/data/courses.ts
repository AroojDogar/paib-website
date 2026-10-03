export type Course = {
  slug: string;
  title: string;
  level?: string;
  duration?: string;
  price?: string; // leave empty until official
  summary: string;
  instructor?: string;
  status: "open" | "upcoming" | "closed";
  enrollUrl?: string;
};

export const courses: Course[] = [
  {
    slug: "ai-agentic-ai-level-1",
    title: "AI & Agentic AI Professional Program",
    level: "Level I",
    summary:
      "A practical program for students and professionals who want to learn AI and Agentic AI and put it to work.",
    status: "upcoming", // change when enrollment opens
  },
];