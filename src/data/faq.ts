export type Faq = {
  id: string;
  q: string;
  keywords: string[];
  a: string;
  link?: { label: string; href: string };
  next?: string[]; // ids of suggested follow-up questions
};

export const faqs: Faq[] = [
  {
    id: "hello",
    q: "Hello",
    keywords: ["hi", "hello", "hey", "salam", "assalam o alaikum", "assalamualaikum", "good morning", "good evening"],
    a: "Hello! I'm the PAIB Knowledge Assistant. I can tell you about PAIB, our programs and services, and how to get involved. What would you like to know?",
    next: ["about", "programs", "join"],
  },
  {
    id: "about",
    q: "What is PAIB?",
    keywords: ["what is paib", "about paib", "who are you", "tell me about", "organization", "organisation", "paib"],
    a: "PAIB (Pakistan Artificial Intelligence and Blockchain) is where people learn emerging technology, build real AI and blockchain solutions, and turn those skills into professional and business opportunities. Our idea is simple: LEARN | BUILD | EARN.",
    link: { label: "About PAIB", href: "/about" },
    next: ["programs", "services", "who"],
  },
  {
    id: "programs",
    q: "What programs does PAIB offer?",
    keywords: ["program", "course", "learn", "training", "study", "class", "teach", "syllabus"],
    a: "PAIB is preparing programs in AI and Agentic AI. Details and start dates will be announced on the Learn page. To hear first, contact the team.",
    link: { label: "See Learn page", href: "/learn" },
    next: ["who", "fees", "join"],
  },
  {
    id: "who",
    q: "Who can join PAIB programs?",
    keywords: ["who can", "eligible", "eligibility", "student", "professional", "background", "beginner", "anyone", "field", "age", "qualification"],
    a: "Anyone. PAIB is open to students, professionals and curious learners from every field and background.",
    link: { label: "Contact the team", href: "/contact" },
    next: ["programs", "agentic", "earn"],
  },
  {
    id: "agentic",
    q: "What is Agentic AI?",
    keywords: ["agentic", "agentic ai", "ai agent", "agent"],
    a: "Agentic AI means AI systems that don't just answer questions. They can plan steps, use tools and complete tasks toward a goal, such as research, automation or everyday workflows.",
    next: ["services", "earn", "programs"],
  },
  {
    id: "services",
    q: "What services does PAIB provide?",
    keywords: ["service", "solution", "chatbot", "automation", "consulting", "consultant", "analytics", "build", "development", "integration"],
    a: "PAIB works on AI agents, chatbots, AI automation, custom AI development, data analytics, AI consulting, AI integration and blockchain applications.",
    link: { label: "See Build page", href: "/build" },
    next: ["company", "projects", "blockchain"],
  },
  {
    id: "company",
    q: "How can my company work with PAIB?",
    keywords: ["company", "business", "work with", "hire", "client", "partner", "partnership", "collaborate", "organization project", "need a solution"],
    a: "Tell us what you want to achieve and the team will discuss how AI can help. Use the Contact page or write to info@paib.pk.",
    link: { label: "Work With PAIB", href: "/contact" },
    next: ["services", "projects"],
  },
  {
    id: "join",
    q: "How can I join PAIB?",
    keywords: ["join", "career", "team member", "volunteer", "apply", "application", "membership", "become a member"],
    a: "We welcome developers, trainers, researchers and learners. Send a message through the Contact page and tell us a little about yourself.",
    link: { label: "Join PAIB", href: "/contact" },
    next: ["who", "programs"],
  },
  {
    id: "earn",
    q: "How can I earn with AI skills?",
    keywords: ["earn", "income", "money", "freelance", "freelancer", "opportunity", "opportunities", "job", "entrepreneur", "pathway"],
    a: "PAIB shows five pathways: AI Freelancer, AI Consultant, AI Agent Builder, AI-Powered Analyst and AI Entrepreneur. These are pathways, not guarantees of income, and results depend on your skills and effort.",
    link: { label: "Explore Earn page", href: "/earn" },
    next: ["programs", "agentic"],
  },
  {
    id: "projects",
    q: "What projects has PAIB built?",
    keywords: ["project", "portfolio", "built", "previous work", "examples", "case study"],
    a: "Our verified projects will be showcased on the Projects page as they are published. Please check back soon.",
    link: { label: "See Projects", href: "/projects" },
    next: ["services", "company"],
  },
  {
    id: "blockchain",
    q: "Does PAIB work with blockchain?",
    keywords: ["blockchain", "web3", "crypto", "cryptocurrency", "smart contract"],
    a: "Yes. Blockchain is part of PAIB's name and focus. Blockchain applications are part of our solutions, and learning content in this area is planned. Details will be announced as they are confirmed.",
    link: { label: "See Build page", href: "/build" },
    next: ["services", "programs"],
  },
  {
    id: "fees",
    q: "What are the fees and start dates?",
    keywords: ["fee", "fees", "price", "cost", "how much", "payment", "start date", "when does", "schedule", "enroll", "enrol", "enrollment", "register", "registration"],
    a: "Program fees and start dates will be announced on the Learn page once confirmed. For now, please contact the team at info@paib.pk.",
    link: { label: "Contact the team", href: "/contact" },
    next: ["programs", "join"],
  },
  {
    id: "mission",
    q: "What is PAIB's mission and vision?",
    keywords: ["mission", "vision", "goal", "purpose", "values", "2030"],
    a: "Our mission is to democratize artificial intelligence in Pakistan through AI solutions, education and innovation. Our vision is to position Pakistan as a global leader in AI by 2030.",
    link: { label: "About PAIB", href: "/about" },
    next: ["about", "team"],
  },
  {
    id: "team",
    q: "Who is on the PAIB team?",
    keywords: ["team", "management", "leadership", "director", "head of program", "staff", "people behind"],
    a: "You can meet the PAIB leadership and program team on our Team page.",
    link: { label: "Meet the team", href: "/team" },
    next: ["about", "join"],
  },
  {
    id: "contact",
    q: "How can I contact PAIB?",
    keywords: ["contact", "email", "reach", "talk to", "speak to", "get in touch", "message", "human", "support"],
    a: "You can reach the PAIB team at info@paib.pk or through the form on the Contact page.",
    link: { label: "Open Contact page", href: "/contact" },
    next: ["join", "company"],
  },
];

export const starterIds = ["about", "programs", "who", "services", "join"];

export const fallback = {
  a: "I'm not sure about that one, and I don't want to guess. I can help with PAIB, our programs, services and how to get involved. For anything else, the team can help directly at info@paib.pk.",
  link: { label: "Contact the team", href: "/contact" },
};