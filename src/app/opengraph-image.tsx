import { ImageResponse } from "next/og";

export const alt = "MST — Technology consulting and software engineering";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
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
          "radial-gradient(60% 70% at 80% 15%, rgba(157,184,255,0.55), transparent 70%), radial-gradient(55% 60% at 15% 95%, rgba(44,92,240,0.6), transparent 70%), linear-gradient(160deg, #0d1f42 0%, #08152e 55%, #050d1f 100%)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        <svg width="52" height="52" viewBox="0 0 28 28">
          <rect x="0.75" y="0.75" width="26.5" height="26.5" rx="2" fill="none" stroke="white" strokeWidth="1.5" />
          <path d="M7 20V8l7 7 7-7v12" fill="none" stroke="white" strokeWidth="1.6" strokeLinejoin="round" />
          <rect x="19.5" y="18.5" width="3" height="3" fill="#2c5cf0" />
        </svg>
        <div style={{ fontSize: 34, fontWeight: 600, letterSpacing: 8 }}>MST</div>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ fontSize: 76, lineHeight: 1.05, letterSpacing: -2.5, maxWidth: 960 }}>
          We build the technology that moves businesses forward.
        </div>
        <div style={{ marginTop: 32, fontSize: 26, color: "rgba(255,255,255,0.7)" }}>
          Software engineering · AI & automation · Cloud · Data · Integration · Consulting
        </div>
      </div>
    </div>,
    size,
  );
}
