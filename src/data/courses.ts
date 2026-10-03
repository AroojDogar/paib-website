export type Course = {
  slug: string;
  title: string;
  titleUr: string;
  level?: string;
  levelUr?: string;
  duration?: string;
  price?: string; // leave empty until official
  summary: string;
  summaryUr: string;
  instructor?: string;
  status: "open" | "upcoming" | "closed";
  enrollUrl?: string;
};

export const courses: Course[] = [
  {
    slug: "ai-agentic-ai-level-1",
    title: "AI & Agentic AI Professional Program",
    titleUr: "AI اور ایجنٹک AI پروفیشنل پروگرام",
    level: "Level I",
    levelUr: "سطح اول",
    summary:
      "A practical program for students and professionals who want to learn AI and Agentic AI and put it to work.",
    summaryUr:
      "طلبہ اور پیشہ ور افراد کے لیے ایک عملی پروگرام جو AI اور ایجنٹک AI سیکھنا اور اسے کام میں لانا چاہتے ہیں۔",
    status: "upcoming", // change when enrollment opens
  },
];