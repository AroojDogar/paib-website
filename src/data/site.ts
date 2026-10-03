export const site = {
  name: "PAIB",
  fullName: "Pakistan Artificial Intelligence and Blockchain",
  tagline: ["LEARN", "BUILD", "EARN"] as const,
  description:
    "Learn emerging technology, build real AI and blockchain solutions, and turn those skills into professional and business opportunities.",

  // Reference data from the old site. Update when official details are confirmed.
    contact: {
    emails: ["info@paib.pk"],
    phone: "", // add later
    address: "", // add later
    hours: [] as string[], 
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
    { label: "About", href: "/about" },
    { label: "Learn", href: "/learn" },
    { label: "Build", href: "/build" },
    { label: "Earn", href: "/earn" },
    { label: "Projects", href: "/projects" },
    { label: "Team", href: "/team" },
    { label: "Contact", href: "/contact" },
  ],

  // Audience-specific actions
  ctas: [
    { audience: "Student", label: "Start Learning", href: "/learn" },
    { audience: "Business", label: "Work With PAIB", href: "/build" },
    { audience: "Team member", label: "Join PAIB", href: "/contact" },
    { audience: "Builder", label: "Build With PAIB", href: "/projects" },
    { audience: "Opportunity seeker", label: "Explore AI Opportunities", href: "/earn" },
  ],
};