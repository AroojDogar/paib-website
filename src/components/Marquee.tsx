const items = [
  "Artificial Intelligence",
  "Agentic AI",
  "Blockchain",
  "AI Automation",
  "Chatbots",
  "Data Analytics",
  "AI Consulting",
  "Custom AI Development",
];

export default function Marquee() {
  const row = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-ink/10 bg-ivory py-5">
      <div className="marquee-track">
        {row.map((t, i) => (
          <span
            key={i}
            className="flex items-center whitespace-nowrap px-8 font-display text-lg font-semibold text-ink/70"
          >
            {t}
            <span className="ml-16 text-gold">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}