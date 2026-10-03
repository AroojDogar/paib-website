import { faqs, type Faq } from "@/data/faq";

function normalize(s: string) {
  return s
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function stem(w: string) {
  return w.length > 3 && w.endsWith("s") ? w.slice(0, -1) : w;
}

function lev(a: string, b: string) {
  const dp = Array.from({ length: a.length + 1 }, (_, i) => [i, ...Array(b.length).fill(0)]);
  for (let j = 1; j <= b.length; j++) dp[0][j] = j;
  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      dp[i][j] = Math.min(
        dp[i - 1][j] + 1,
        dp[i][j - 1] + 1,
        dp[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1)
      );
    }
  }
  return dp[a.length][b.length];
}

export function matchFaq(input: string): Faq | null {
  const tokens = normalize(input).split(" ").filter(Boolean).map(stem);
  if (!tokens.length) return null;
  const joined = ` ${tokens.join(" ")} `;

  let best: { score: number; faq: Faq | null } = { score: 0, faq: null };

  for (const f of faqs) {
    let score = 0;
    for (const kw of [...f.keywords, ...f.keywordsUr]) {
      const kwTokens = normalize(kw).split(" ").map(stem);
      const phrase = ` ${kwTokens.join(" ")} `;
      if (joined.includes(phrase)) {
        score += 3 * kwTokens.length + 1;
        continue;
      }
      if (kwTokens.length === 1 && kwTokens[0].length >= 5) {
        if (tokens.some((t) => t.length >= 5 && lev(t, kwTokens[0]) <= 1)) score += 2;
      }
    }
    if (score > best.score) best = { score, faq: f };
  }

  return best.score >= 3 ? best.faq : null;
}