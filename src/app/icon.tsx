import { ImageResponse } from "next/og";
import { brandHeartDataUri } from "@/lib/brand-heart-svg";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#eef3f7",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={brandHeartDataUri()} width={28} height={28} alt="" />
      </div>
    ),
    { ...size }
  );
}
