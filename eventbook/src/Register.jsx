import { useNavigate } from "react-router-dom";

const Register = () => {
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
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "black",
          opacity: 0.5
        }}
      ></div>

      <div
        style={{
          position: "relative",
          zIndex: 2,
          backgroundColor: "white",
          padding: "48px 40px",
          borderRadius: "10px",
          border: "1px solid white",
          textAlign: "center",
          width: "100%",
          maxWidth: "440px",
          boxShadow: "0 10px 30px black"
        }}
      >
        <h1
          style={{
            marginBottom: "12px",
            fontWeight: "600"
          }}
        >
          Welcome!🎉🎉
        </h1>

        <p
          style={{
            marginBottom: "28px",
            color: "black",
            fontSize: "15px",
            lineHeight: "1.5"
          }}
        >
          You are now logged in and ready to create your first event.
        </p>

        <button
          onClick={() => navigate("/create")}
          style={{
            padding: "14px 32px",
            fontSize: "16px",
            borderRadius: "5px",
            border: "none",
            backgroundColor: "orange",
            color: "white",
            cursor: "pointer",
            fontWeight: "500"
          }}
        >
          + Create Event
        </button>
      </div>
    </div>
  );
};

export default Register;
