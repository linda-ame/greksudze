import Link from "next/link";
import { AGE_VERSIONS } from "@/lib/versions";
import { BrandMark } from "@/components/BrandMark";
import "@/components/welcome.css";

export default function AgeSelectPage() {
  return (
    <div className="welcome">
      <div className="welcome-glow" aria-hidden />
      <div className="welcome-shell">
        <div className="welcome-brand-block">
          <BrandMark className="welcome-mark" size={72} />
          <p className="welcome-brand">Grēksūdze</p>
        </div>
        <section className="welcome-panel">
          <h1 className="welcome-title">Izvēlies versiju</h1>
          <p className="welcome-note">
            Bērnu un pusaudžu versijām par pamatu ņemts katolis.lv grēksūdzes
            saturs; lapas autors pēc saviem uzskatiem pielāgojis jautājumus un
            valodu, kā arī noteicis vecuma grupu iedalījumu. Nav apstiprināts
            teoloģisks materiāls — lietot uz savu atbildību.
          </p>
          <ul className="age-list">
            {AGE_VERSIONS.map((v) => (
              <li key={v.id}>
                {v.available && v.href ? (
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
          <Link
            href="/"
            className="welcome-btn welcome-btn-ghost"
            style={{ textAlign: "center" }}
          >
            Atpakaļ uz ievadu
          </Link>
        </section>
      </div>
    </div>
  );
}
