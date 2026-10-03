export type Pathway = {
  id: "freelancer" | "consultant" | "builder" | "analyst" | "entrepreneur";
  title: string;
  description: string;
};

export const pathways: Pathway[] = [
  {
    id: "freelancer",
    title: "AI Freelancer",
    description: "Offer your skills, supercharged by AI, to clients anywhere in the world.",
  },
  {
    id: "consultant",
    title: "AI Consultant",
    description: "Guide people and organizations on where AI can make a real difference.",
  },
  {
    id: "builder",
    title: "AI Agent Builder",
    description: "Design agents that automate tasks, research and everyday workflows.",
  },
  {
    id: "analyst",
    title: "AI-Powered Analyst",
    description: "Turn information into clear insights and better decisions with AI.",
  },
  {
    id: "entrepreneur",
    title: "AI Entrepreneur",
    description: "Start something of your own and grow it with AI at its core.",
  },
];