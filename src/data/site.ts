export const site = {
  name: "PAIB",
  fullName: "Pakistan Artificial Intelligence and Blockchain",
  fullNameUr: "پاکستان آرٹیفیشل انٹیلیجنس اینڈ بلاک چین",
  tagline: ["LEARN", "BUILD", "EARN"] as const,
  description:
    "Learn emerging technology, build real AI and blockchain solutions, and turn those skills into professional and business opportunities.",
  descriptionUr:
    "ابھرتی ہوئی ٹیکنالوجی سیکھیں، حقیقی AI اور بلاک چین حل بنائیں، اور اپنی مہارتوں کو پیشہ ورانہ اور کاروباری مواقع میں بدلیں۔",

  contact: {
    emails: ["info@paib.pk"],
    phone: "", // add later
    address: "", // add later
    hours: [] as string[], // add later
  },

  // Add official URLs here. Empty ones are hidden automatically.
  socials: [
    { label: "LinkedIn", href: "" },
    { label: "GitHub", href: "" },
    { label: "X", href: "" },
    { label: "Facebook", href: "" },
    { label: "Instagram", href: "" },
    { label: "YouTube", href: "" },
  ],

  nav: [
    { label: "About", ur: "ہمارے بارے میں", href: "/about" },
    { label: "Learn", ur: "سیکھیں", href: "/learn" },
    { label: "Build", ur: "بنائیں", href: "/build" },
    { label: "Earn", ur: "کمائیں", href: "/earn" },
    { label: "Projects", ur: "پراجیکٹس", href: "/projects" },
    { label: "Management", ur: "انتظامیہ", href: "/team" },
    { label: "Contact", ur: "رابطہ", href: "/contact" },
  ],

  ctas: [
    { audience: "Student", label: "Start Learning", ur: "سیکھنا شروع کریں", href: "/learn" },
    { audience: "Business", label: "Work With PAIB", ur: "PAIB کے ساتھ کام کریں", href: "/build" },
    { audience: "Team member", label: "Join PAIB", ur: "PAIB میں شامل ہوں", href: "/contact" },
    { audience: "Builder", label: "Build With PAIB", ur: "PAIB کے ساتھ بنائیں", href: "/projects" },
    { audience: "Opportunity seeker", label: "Explore AI Opportunities", ur: "AI کے مواقع دیکھیں", href: "/earn" },
  ],
};