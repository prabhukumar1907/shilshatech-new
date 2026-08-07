const theme = {
  primary: "#276ea5", // Brand Blue
  secondary: "#1d4ed8", // Indigo
  glow: "#60a5fa", // Light Blue Glow
  accent: "#38bdf8", // Sky Blue
};

const PageLoader = () => {
  const bars = Array.from({ length: 5 });

  return (
    <>
      <style>{`
        @keyframes waveBars {
          0%, 40%, 100% {
            transform: scaleY(0.28);
            opacity: .35;
          }
          20% {
            transform: scaleY(1);
            opacity: 1;
          }
        }

        @keyframes pulseGlow {
          0%,100%{
            transform:scale(.9);
            opacity:.45;
          }
          50%{
            transform:scale(1.1);
            opacity:.9;
          }
        }

        @keyframes textShimmer {
          0%,100%{
            opacity:.65;
            letter-spacing:.28em;
          }
          50%{
            opacity:1;
            letter-spacing:.36em;
            text-shadow:0 0 12px ${theme.glow}55;
          }
        }
      `}</style>

      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 22,
          background: "transparent",
        }}
      >
        {/* Ambient Glow */}
        <div
          style={{
            position: "absolute",
            width: 120,
            height: 120,
            borderRadius: "50%",
            background: `radial-gradient(circle,
              ${theme.glow}30 0%,
              ${theme.primary}15 45%,
              transparent 75%)`,
            filter: "blur(12px)",
            animation: "pulseGlow 2.8s ease-in-out infinite",
            pointerEvents: "none",
          }}
        />

        {/* Loader */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            gap: 7,
            height: 46,
            zIndex: 2,
          }}
        >
          {bars.map((_, i) => {
            const colors = [
              theme.secondary,
              theme.primary,
              theme.accent,
              theme.glow,
              theme.primary,
            ];

            return (
              <div
                key={i}
                style={{
                  width: 6,
                  height: 40,
                  borderRadius: 999,
                  background: `linear-gradient(
                    to top,
                    ${colors[i]},
                    ${theme.glow},
                    #ffffff
                  )`,
                  boxShadow: `
                    0 0 10px ${colors[i]}55,
                    0 0 18px ${theme.glow}33
                  `,
                  transformOrigin: "bottom",
                  animation:
                    "waveBars 1.15s cubic-bezier(.4,0,.2,1) infinite",
                  animationDelay: `${i * 0.12}s`,
                }}
              />
            );
          })}
        </div>

        {/* Text */}
        <span
          style={{
            fontFamily:
              "Inter, system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
            fontSize: 11,
            fontWeight: 700,
            color: theme.primary,
            textTransform: "uppercase",
            letterSpacing: ".3em",
            animation: "textShimmer 2.2s ease-in-out infinite",
            zIndex: 2,
            userSelect: "none",
          }}
        >
          LOADING
        </span>
      </div>
    </>
  );
};

export default PageLoader;
