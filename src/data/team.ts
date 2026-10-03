export type TeamMember = {
  name: string;
  role: string;
  photo?: string; // e.g. "/team/maham.jpg" (put files in /public/team)
};

export const team: TeamMember[] = [
  { name: "Squadron Leader (R) Mohammad Iqbal Khan", role: "Board of Director" },
  { name: "Mian Muhammad Asif Langrah", role: "Head of Program" },
  { name: "Zeeshan", role: "Deputy Director – Training & Programs" },
  { name: "Maham Hanif", role: "Assistant Director – Programs" },
  { name: "Arooj Dogar", role: "Assistant Director – Programs" },
  { name: "Faisal", role: "Assistant Director – Programs" },
];