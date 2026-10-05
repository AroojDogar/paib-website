export type Member = {
  name: string;
  role: string; // e.g. "Developer", "Trainer", "Researcher"
  photo?: string; // e.g. "/ali.jpeg" (file inside /public)
  skills?: string[]; // e.g. ["Next.js", "Python"]
};

// Add new members here. Leave empty until people join.
export const members: Member[] = [
  // {
  //   name: "Full Name",
  //   role: "Developer",
  //   photo: "/name.jpeg",
  //   skills: ["Next.js", "Python"],
  // },
];