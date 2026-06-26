import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Eco Elite | Colectare și Reciclare Deșeuri Metalice";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    background: "#02080a",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "center",
                    padding: "80px",
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                {/* Green accent glow top */}
                <div
                    style={{
                        position: "absolute",
                        top: "-60px",
                        left: "25%",
                        width: "600px",
                        height: "300px",
                        background:
                            "radial-gradient(ellipse at center, rgba(126,198,54,0.12) 0%, transparent 70%)",
                        filter: "blur(40px)",
                        display: "flex",
                    }}
                />

                {/* Logo row */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "24px",
                        marginBottom: "48px",
                    }}
                >
                    {/* Recycle icon SVG */}
                    <svg
                        width="72"
                        height="72"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#7ec636"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5" />
                        <path d="M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12" />
                        <path d="m14 16-3 3 3 3" />
                        <path d="M8.293 13.596 7.196 9.5 3.1 10.598" />
                        <path d="m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843" />
                        <path d="m13.378 9.633 4.096 1.098 1.097-4.096" />
                    </svg>

                    {/* EcoElite text */}
                    <div
                        style={{
                            display: "flex",
                            fontSize: "80px",
                            fontWeight: "700",
                            fontStyle: "italic",
                            letterSpacing: "-2px",
                        }}
                    >
                        <span style={{ color: "#ffffff" }}>Eco</span>
                        <span style={{ color: "#7ec636" }}>Elite</span>
                    </div>
                </div>

                {/* Main tagline */}
                <div
                    style={{
                        fontSize: "40px",
                        color: "rgba(255,255,255,0.85)",
                        fontWeight: "500",
                        marginBottom: "28px",
                        lineHeight: "1.3",
                        display: "flex",
                        flexDirection: "column",
                        gap: "4px",
                    }}
                >
                    <span>Colectare și Reciclare</span>
                    <span>Deșeuri Metalice</span>
                </div>

                {/* Location */}
                <div
                    style={{
                        fontSize: "24px",
                        color: "rgba(255,255,255,0.35)",
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                        display: "flex",
                    }}
                >
                    București · ecoelite.ro
                </div>

                {/* Bottom green line */}
                <div
                    style={{
                        position: "absolute",
                        bottom: "0",
                        left: "0",
                        right: "0",
                        height: "4px",
                        background:
                            "linear-gradient(90deg, transparent 0%, #7ec636 50%, transparent 100%)",
                        display: "flex",
                    }}
                />
            </div>
        ),
        { ...size }
    );
}
