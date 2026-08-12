import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";
import { ADULT_VERSIONS } from "@/lib/versions";
import "@/components/welcome.css";

export default function AdultsIndexPage() {
  return (
    <div className="welcome">
      <div className="welcome-glow" aria-hidden />
      <div className="welcome-shell">
        <Link href="/vecums" className="welcome-brand-block welcome-brand-block-link">
          <BrandMark className="welcome-mark" size={72} />
          <span className="welcome-brand">Grēksūdze</span>
        </Link>
        <section className="welcome-panel">
          <h1 className="welcome-title">Pieaugušajiem</h1>
          <ul className="age-list">
            {ADULT_VERSIONS.map((v) => (
              <li key={v.id}>
                {v.available ? (
                  <Link href={v.href} className="age-card age-card-live">
                    <span className="age-card-title">{v.title}</span>
                    <span className="age-card-sub">{v.subtitle}</span>
                    <span className="age-card-cta">Sākt →</span>
                  </Link>
                ) : (
                  <div className="age-card age-card-soon" aria-disabled="true">
                    <span className="age-card-title">{v.title}</span>
                    <span className="age-card-sub">{v.subtitle}</span>
                    <span className="age-card-badge">Drīzumā</span>
                  </div>
                )}
              </li>
            ))}
          </ul>
          <Link href="/vecums" className="welcome-btn welcome-btn-ghost" style={{ textAlign: "center" }}>
            Atpakaļ
          </Link>
        </section>
      </div>
    </div>
  );
}
