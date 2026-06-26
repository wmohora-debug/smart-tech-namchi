import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#030712",
          fontFamily: "sans-serif",
          position: "relative",
          padding: "60px",
          boxSizing: "border-box",
        }}
      >
        {/* Subtle geometric glowing background spheres */}
        <div
          style={{
            position: "absolute",
            top: "-10%",
            left: "-10%",
            width: "500px",
            height: "500px",
            background: "radial-gradient(circle, rgba(0,87,255,0.15) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-10%",
            right: "-10%",
            width: "600px",
            height: "600px",
            background: "radial-gradient(circle, rgba(0,194,255,0.15) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />

        {/* Logo Shield */}
        <div
          style={{
            width: "120px",
            height: "120px",
            borderRadius: "32px",
            background: "linear-gradient(to bottom right, #0057FF, #00C2FF)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 20px 40px rgba(0, 87, 255, 0.3)",
            marginBottom: "40px",
          }}
        >
          <span
            style={{
              fontSize: "72px",
              fontWeight: 900,
              color: "white",
            }}
          >
            S
          </span>
        </div>

        {/* Branding Info */}
        <h1
          style={{
            fontSize: "64px",
            fontWeight: 900,
            color: "white",
            margin: "0 0 16px 0",
            letterSpacing: "-1.5px",
            textAlign: "center",
          }}
        >
          SMART TECH NAMCHI
        </h1>

        <p
          style={{
            fontSize: "28px",
            color: "#00C2FF",
            margin: "0 0 32px 0",
            fontWeight: 700,
            letterSpacing: "3px",
            textTransform: "uppercase",
            textAlign: "center",
          }}
        >
          The Ultimate Printing Solution
        </p>

        <div
          style={{
            fontSize: "18px",
            color: "#9ca3af",
            fontWeight: 500,
            textAlign: "center",
            maxWidth: "700px",
            lineHeight: 1.5,
          }}
        >
          Flex Banners • Digital Press • PVC ID Cards • Sublimation Jerseys • Trophies • Framing
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
