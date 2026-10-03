export type Pathway = {
  id: "freelancer" | "consultant" | "builder" | "analyst" | "entrepreneur";
  title: string;
  titleUr: string;
  description: string;
  descriptionUr: string;
};

export const pathways: Pathway[] = [
  {
    id: "freelancer",
    title: "AI Freelancer",
    titleUr: "AI فری لانسر",
    description: "Offer your skills, supercharged by AI, to clients anywhere in the world.",
    descriptionUr: "اپنی مہارتیں AI کی طاقت کے ساتھ دنیا بھر کے کلائنٹس کو پیش کریں۔",
  },
  {
    id: "consultant",
    title: "AI Consultant",
    titleUr: "AI کنسلٹنٹ",
    description: "Guide people and organizations on where AI can make a real difference.",
    descriptionUr: "لوگوں اور اداروں کی رہنمائی کریں کہ AI کہاں حقیقی فرق ڈال سکتا ہے۔",
  },
  {
    id: "builder",
    title: "AI Agent Builder",
    titleUr: "AI ایجنٹ بلڈر",
    description: "Design agents that automate tasks, research and everyday workflows.",
    descriptionUr: "ایسے ایجنٹس بنائیں جو کام، تحقیق اور روزمرہ ورک فلو کو خودکار کریں۔",
  },
  {
    id: "analyst",
    title: "AI-Powered Analyst",
    titleUr: "AI سے لیس تجزیہ کار",
    description: "Turn information into clear insights and better decisions with AI.",
    descriptionUr: "AI کی مدد سے معلومات کو واضح بصیرت اور بہتر فیصلوں میں بدلیں۔",
  },
  {
    id: "entrepreneur",
    title: "AI Entrepreneur",
    titleUr: "AI انٹرپرینیور",
    description: "Start something of your own and grow it with AI at its core.",
    descriptionUr: "اپنا کام شروع کریں اور AI کو اس کا مرکز بنا کر اسے آگے بڑھائیں۔",
  },
];