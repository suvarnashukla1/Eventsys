import { useState } from "react";

const Create = () => {
  const [eventName, setEventName] = useState("");
  const [location, setLocation] = useState("");
  const [place, setPlace] = useState("");
  const [seats, setSeats] = useState("");
  const [amount, setAmount] = useState("");
  const [restriction, setRestriction] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleCreate = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify({
          eventName,
          location,
          place,
          seats,
          amount,
          restriction,
          date,
          time
        })
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Failed to create event");
        return;
      }

      alert("Event created successfully");
    } catch {
      alert("Server error");
    }
  };

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
        fontFamily: "Segoe UI, sans-serif"
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
          padding: "32px",
          borderRadius: "8px",
          width: "100%",
          maxWidth: "500px",
          color: "black"
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "24px" }}>
          Create Event
        </h2>

        <input
          type="text"
          placeholder="Event Name"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
          style={{ width: "100%", padding: "12px", marginBottom: "12px" }}
        />

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          style={{ width: "100%", padding: "12px", marginBottom: "12px" }}
        />

        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          style={{ width: "100%", padding: "12px", marginBottom: "12px" }}
        />

        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          style={{ width: "100%", padding: "12px", marginBottom: "12px" }}
        />

        <input
          type="text"
          placeholder="Place"
          value={place}
          onChange={(e) => setPlace(e.target.value)}
          style={{ width: "100%", padding: "12px", marginBottom: "12px" }}
        />

        <input
          type="number"
          placeholder="Seats"
          value={seats}
          onChange={(e) => setSeats(e.target.value)}
          style={{ width: "100%", padding: "12px", marginBottom: "12px" }}
        />

        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          style={{ width: "100%", padding: "12px", marginBottom: "12px" }}
        />

        <textarea
          placeholder="Restriction / Description"
          value={restriction}
          onChange={(e) => setRestriction(e.target.value)}
          rows="3"
          style={{ width: "100%", padding: "12px", marginBottom: "20px" }}
        />

        <button
          onClick={handleCreate}
          style={{
            width: "100%",
            padding: "12px",
            backgroundColor: "red",
            color: "white",
            border: "none",
            borderRadius: "5px",
            fontSize: "16px",
            cursor: "pointer"
          }}
        >
          Create Event
        </button>
      </div>
    </div>
  );
};

export default Create;
