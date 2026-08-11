import { CONTENT_VERSION_HREFS } from "@/lib/versions";

const STORAGE_KEY = "greksudze-last-version";

export function isContentVersionHref(href: string): boolean {
  return CONTENT_VERSION_HREFS.includes(href);
}

export function saveLastVersion(href: string) {
  if (!isContentVersionHref(href)) return;
  try {
    localStorage.setItem(STORAGE_KEY, href);
  } catch {
    /* ignore quota / private mode */
  }
}

export function loadLastVersion(): string | null {
  try {
    const href = localStorage.getItem(STORAGE_KEY);
    if (href && isContentVersionHref(href)) return href;
  } catch {
    /* ignore */
  }
  return null;
}

/** True when launched as an installed home-screen / standalone app. */
export function isStandaloneApp(): boolean {
  if (typeof window === "undefined") return false;
  const mq = window.matchMedia("(display-mode: standalone)").matches;
  const ios =
    "standalone" in window.navigator &&
    Boolean((window.navigator as Navigator & { standalone?: boolean }).standalone);
  return mq || ios;
}
