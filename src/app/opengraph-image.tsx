import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Reiner Umila, software engineering student at McMaster University";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Same values as globals.css. ImageResponse can't read CSS variables.
const colors = {
  background: "#011627",
  foreground: "#d6deeb",
  purple: "#c792ea",
  blue: "#82aaff",
  green: "#addb67",
  cyan: "#7fdbca",
  gold: "#ecc48d",
  red: "#ef5350",
};

const stripe = [colors.purple, colors.blue, colors.green, colors.cyan, colors.gold, colors.red];

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: colors.background,
          color: colors.foreground,
        }}
      >
        <div style={{ display: "flex", width: "100%", height: 10 }}>
          {stripe.map((c) => (
            <div key={c} style={{ flex: 1, backgroundColor: c }} />
          ))}
        </div>

        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 96px",
          }}
        >
          <div style={{ fontSize: 88, color: colors.blue, letterSpacing: "-0.02em" }}>
            Reiner Umila
          </div>
          <div style={{ marginTop: 20, fontSize: 36, opacity: 0.8 }}>
            Software Engineering, McMaster University
          </div>
          <div style={{ marginTop: 8, fontSize: 36, opacity: 0.8 }}>
            QA co-op, Ontario Public Service
          </div>
        </div>

        <div style={{ display: "flex", padding: "0 96px 64px", fontSize: 28, color: colors.cyan }}>
          reinerumila.dev
        </div>
      </div>
    ),
    size,
  );
}
