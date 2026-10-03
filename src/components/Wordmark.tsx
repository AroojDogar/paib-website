import { site } from "@/data/site";

export default function Wordmark({
  onDark = false,
  showTagline = false,
}: {
  onDark?: boolean;
  showTagline?: boolean;
}) {
  return (
    <div className="leading-none">
      <div
        className={`font-display text-3xl font-extrabold tracking-tight ${
          onDark ? "text-white" : "text-paib-navy"
        }`}
      >
        PAIB
      </div>
      {showTagline && (
        <div className="mt-1 font-mono text-[10px] tracking-[0.25em] text-paib-blue">
          {site.tagline.join(" | ")}
        </div>
      )}
    </div>
  );
}