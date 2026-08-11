"use client";

import Link from "next/link";
import introData from "@/data/confession/children/sirdsapzinas-izmeklesana.json";
import { BrandMark } from "@/components/BrandMark";
import "./welcome.css";

const introText = introData.content.intro.text;

export function WelcomeFlow() {
  return (
    <div className="welcome">
      <div className="welcome-glow" aria-hidden />
      <div className="welcome-shell">
        <div className="welcome-brand-block">
          <BrandMark className="welcome-mark" size={80} />
          <p className="welcome-brand">Grēksūdze</p>
        </div>
        <section className="welcome-panel">
          <h1 className="welcome-title">Ievads</h1>
          <div className="welcome-prose">
            {introText.map((t) => (
              <p key={t.slice(0, 48)}>{t}</p>
            ))}
          </div>
          <Link href="/vecums" className="welcome-btn" style={{ textAlign: "center" }}>
            Turpināt
          </Link>
        </section>
      </div>
    </div>
  );
}
