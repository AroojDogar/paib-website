import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "PAIB: Learn | Build | Earn";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#04120e",
          color: "#f6f1e7",
        }}
      >
        <div style={{ fontSize: 150, fontWeight: 800, color: "#f6f1e7" }}>PAIB</div>
        <div style={{ fontSize: 34, marginTop: 8, color: "#e8b84a" }}>
          Pakistan Artificial Intelligence and Blockchain
        </div>
        <div style={{ display: "flex", gap: 24, marginTop: 56, fontSize: 44, fontWeight: 700 }}>
          <span style={{ color: "#14b87a" }}>LEARN</span>
          <span style={{ color: "#f6f1e7" }}>BUILD</span>
          <span style={{ color: "#e8b84a" }}>EARN</span>
        </div>
      </div>
    ),
    { ...size }
  );
}