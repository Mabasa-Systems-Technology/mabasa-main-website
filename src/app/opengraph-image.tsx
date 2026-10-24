import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Blackroid — Engineering better businesses";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const logo = await readFile(join(process.cwd(), "public/brand/logo-light.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "72px 80px",
        color: "white",
        background:
          "radial-gradient(60% 70% at 85% 10%, rgba(255,255,255,0.12), transparent 70%), radial-gradient(55% 60% at 15% 95%, rgba(80,80,80,0.5), transparent 70%), linear-gradient(160deg, #171717 0%, #0d0d0d 55%, #050505 100%)",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={logoSrc} height={84} alt="" />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ fontSize: 76, lineHeight: 1.05, letterSpacing: -2.5, maxWidth: 960 }}>
          Engineering better businesses.
        </div>
        <div style={{ marginTop: 32, fontSize: 26, color: "rgba(255,255,255,0.7)" }}>
          Software engineering · AI & automation · Cloud · Data · Integration · Consulting
        </div>
      </div>
    </div>,
    size,
  );
}
