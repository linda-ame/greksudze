/** Shared heart mark SVG for app icons (favicon / home screen). */
export const BRAND_HEART_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72" fill="none">
  <path d="M36 66C36 66 6 44.5 6 25.5C6 14.2 14.8 6.5 26.2 6.5C31.8 6.5 36.2 9.4 36 14.2C35.8 9.4 40.2 6.5 45.8 6.5C57.2 6.5 66 14.2 66 25.5C66 44.5 36 66 36 66Z" fill="url(#g)" stroke="url(#r)" stroke-width="1.5" stroke-opacity="0.7"/>
  <path d="M36 20v28M26 32h20" stroke="#2a3544" stroke-width="3.2" stroke-linecap="round"/>
  <circle cx="36" cy="32" r="3.2" fill="#c9a66b"/>
  <defs>
    <radialGradient id="g" cx="50%" cy="40%" r="58%">
      <stop offset="0%" stop-color="#e4d4a8" stop-opacity="0.85"/>
      <stop offset="45%" stop-color="#e8dfc8" stop-opacity="0.55"/>
      <stop offset="100%" stop-color="#e4eef4" stop-opacity="0.15"/>
    </radialGradient>
    <linearGradient id="r" x1="10" y1="8" x2="62" y2="62">
      <stop stop-color="#c9a66b"/>
      <stop offset="1" stop-color="#6b8f8a"/>
    </linearGradient>
  </defs>
</svg>`;

export function brandHeartDataUri() {
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(BRAND_HEART_SVG)}`;
}
