export type TeamMember = {
  name: string;
  role: string;
  photo?: string;
  focus?: string; // crop anchor, e.g. "50% 10%"
  zoom?: number;  // 1 = normal, 1.5 = zoomed in
};

export const team: TeamMember[] = [
  {
    name: "Squadron Leader (R) Mohammad Iqbal Khan",
    role: "Board of Director",
    photo: "/iqbal.jpeg",
  },
  {
    name: "Mian Muhammad Asif Langrah",
    role: "Head of Program",
    photo: "/asif.jpeg",
  },
  {
    name: "Zeeshan",
    role: "Deputy Director – Training & Programs",
    // photo: "/zeeshan.jpeg", // uncomment when you add his photo
  },
  {
    name: "Maham Hanif",
    role: "Assistant Director – Programs",
    photo: "/maham.jpeg",
  },
  {
  name: "Arooj Dogar",
  role: "Assistant Director – Programs",
  photo: "/arooj-new.jpeg",
},
  {
    name: "Faisal",
    role: "Assistant Director – Programs",
    photo: "/faisal.jpeg",
  },
];