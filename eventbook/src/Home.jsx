import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundImage:
          "url('https://static.vecteezy.com/system/resources/thumbnails/073/976/799/small/microphone-on-stage-illuminated-by-spotlight-photo.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "fixed",
        top: 0,
        left: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Segoe UI, sans-serif",
        overflow: "hidden"
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.65)"
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          color: "#ffffff",
          textAlign: "center",
          padding: "24px",
          maxWidth: "600px"
        }}
      >
        <h1
          style={{
            fontSize: "3.2rem",
            fontWeight: "600",
            marginBottom: "12px"
          }}
        >
          Plan-tastic ✨
        </h1>

        <p
          style={{
            fontSize: "1.25rem",
            opacity: 0.9,
            marginBottom: "36px"
          }}
        >
          Dont dream it, live it. Buy a ticket!
        </p>

        <div
          style={{
            display: "flex",
            gap: "16px",
            justifyContent: "center",
            flexWrap: "wrap"
          }}
        >
          <button
            onClick={() => navigate("/browse")}
            style={{
              padding: "14px 30px",
              fontSize: "16px",
              borderRadius: "6px",
              border: "none",
              cursor: "pointer",
              backgroundColor: "#ff4d4f",
              color: "#ffffff"
            }}
          >
            Browse Events
          </button>

          <button
            onClick={() => navigate("/login")}
            style={{
              padding: "14px 30px",
              fontSize: "16px",
              borderRadius: "6px",
              border: "1px solid #ffffff",
              cursor: "pointer",
              backgroundColor: "transparent",
              color: "#ffffff"
            }}
          >
            Admin Login
          </button>
        </div>
      </div>
    </div>
  );
}
