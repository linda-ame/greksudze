"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import introData from "@/data/confession/children/sirdsapzinas-izmeklesana.json";
import { BrandMark } from "@/components/BrandMark";
import { isStandaloneApp, loadLastVersion } from "@/lib/last-version";
import "./welcome.css";

const introText = introData.content.intro.text;

export function WelcomeFlow() {
  const router = useRouter();
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    if (isStandaloneApp()) {
      const last = loadLastVersion();
      if (last) {
        router.replace(last);
        return;
      }
    }
    setChecking(false);
  }, [router]);

  if (checking) {
    return (
      <div className="welcome">
        <div className="welcome-glow" aria-hidden />
        <div className="welcome-shell">
          <p className="welcome-lead" style={{ margin: 0 }}>
            Ielādē…
          </p>
        </div>
      </div>
    );
  }

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
