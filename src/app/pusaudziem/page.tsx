import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";
import { TEEN_VERSIONS } from "@/lib/versions";
import "@/components/welcome.css";

export default function TeensIndexPage() {
  return (
    <div className="welcome">
      <div className="welcome-glow" aria-hidden />
      <div className="welcome-shell">
        <Link href="/vecums" className="welcome-brand-block welcome-brand-block-link">
          <BrandMark className="welcome-mark" size={72} />
          <span className="welcome-brand">Grēksūdze</span>
        </Link>
        <section className="welcome-panel">
          <h1 className="welcome-title">Pusaudžiem</h1>
          <p className="welcome-lead">
            Izvēlies versiju pēc vecuma. Saturs abās versijās atšķiras.
          </p>
          <ul className="age-list">
            {TEEN_VERSIONS.map((v) => (
              <li key={v.id}>
                <Link href={v.href} className="age-card age-card-live">
                  <span className="age-card-title">{v.title}</span>
                  <span className="age-card-sub">{v.subtitle}</span>
                  <span className="age-card-cta">Sākt →</span>
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/vecums"
            className="welcome-btn welcome-btn-ghost"
            style={{ textAlign: "center" }}
          >
            Atpakaļ
          </Link>
        </section>
      </div>
    </div>
  );
}
