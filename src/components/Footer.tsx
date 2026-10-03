import Link from "next/link";
import Wordmark from "./Wordmark";
import { site } from "@/data/site";

export default function Footer() {
  const socials = site.socials.filter((s) => s.href);

  return (
    <footer className="bg-ink text-white/70">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3">
        <div>
          <Wordmark onDark showTagline />
          <p className="mt-4 max-w-xs text-sm">{site.fullName}</p>
        </div>

        <div className="text-sm">
          <div className="mb-3 font-mono text-xs tracking-widest text-gold">
            EXPLORE
          </div>
          <ul className="space-y-2">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-sm">
          <div className="mb-3 font-mono text-xs tracking-widest text-gold">
            CONTACT
          </div>
                   <ul className="space-y-2">
            {site.contact.emails.map((e) => (
              <li key={e}>{e}</li>
            ))}
            {site.contact.phone && <li>{site.contact.phone}</li>}
            {site.contact.address && <li>{site.contact.address}</li>}
          </ul>
          {socials.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-4">
              {socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="hover:text-white">
                  {s.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-xs">
        © {new Date().getFullYear()} {site.name}. All rights reserved.
      </div>
    </footer>
  );
}