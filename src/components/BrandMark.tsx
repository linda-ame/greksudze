import { useId } from "react";

export function BrandMark({
  className = "",
  size = 72,
}: {
  className?: string;
  size?: number;
}) {
  const uid = useId().replace(/:/g, "");
  const glow = `gm-glow-${uid}`;
  const ring = `gm-ring-${uid}`;
  const cross = `gm-cross-${uid}`;

  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 72 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M36 66C36 66 6 44.5 6 25.5C6 14.2 14.8 6.5 26.2 6.5C31.8 6.5 36.2 9.4 36 14.2C35.8 9.4 40.2 6.5 45.8 6.5C57.2 6.5 66 14.2 66 25.5C66 44.5 36 66 36 66Z"
        fill={`url(#${glow})`}
      />
      <path
        d="M36 66C36 66 6 44.5 6 25.5C6 14.2 14.8 6.5 26.2 6.5C31.8 6.5 36.2 9.4 36 14.2C35.8 9.4 40.2 6.5 45.8 6.5C57.2 6.5 66 14.2 66 25.5C66 44.5 36 66 36 66Z"
        stroke={`url(#${ring})`}
        strokeWidth="1.5"
        opacity="0.7"
      />
      <path
        d="M36 20v28M26 32h20"
        stroke={`url(#${cross})`}
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      <circle cx="36" cy="32" r="3.2" fill="#c9a66b" />
      <defs>
        <radialGradient id={glow} cx="50%" cy="40%" r="58%">
          <stop offset="0%" stopColor="#e4d4a8" stopOpacity="0.72" />
          <stop offset="45%" stopColor="#e8dfc8" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#e4eef4" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={ring} x1="10" y1="8" x2="62" y2="62">
          <stop stopColor="#c9a66b" />
          <stop offset="1" stopColor="#6b8f8a" />
        </linearGradient>
        <linearGradient id={cross} x1="36" y1="20" x2="36" y2="48">
          <stop stopColor="#2a3544" />
          <stop offset="1" stopColor="#3d4f63" />
        </linearGradient>
      </defs>
    </svg>
  );
}
