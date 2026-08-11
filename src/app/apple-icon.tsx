import { ImageResponse } from "next/og";
import { brandHeartDataUri } from "@/lib/brand-heart-svg";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(165deg, #eef3f7 0%, #e4ebf2 48%, #dfe8ef 100%)",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={brandHeartDataUri()} width={128} height={128} alt="" />
      </div>
    ),
    { ...size }
  );
}
