import { ImageResponse } from "next/og";
import { brandHeartDataUri } from "@/lib/brand-heart-svg";

type Props = { params: Promise<{ size: string }> };

const ALLOWED = new Set([192, 512]);

export async function GET(_req: Request, { params }: Props) {
  const raw = Number((await params).size);
  if (!ALLOWED.has(raw)) {
    return new Response("Not found", { status: 404 });
  }

  const heart = Math.round(raw * 0.72);

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
        <img src={brandHeartDataUri()} width={heart} height={heart} alt="" />
      </div>
    ),
    { width: raw, height: raw }
  );
}
