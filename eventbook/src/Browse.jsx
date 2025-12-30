import { useEffect, useState } from "react";

export default function Browse() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:5000/api/events");
        const result = await response.json();
        setEvents(result);
      } catch {
        alert("Error loading events");
      }
    }
    fetchData();
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage:
          "url('https://magazine.luxus-plus.com/wp-content/uploads/2023/07/TAIT-x-The-Weeknd-2022-0026-scaled-1.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "40px"
      }}
    >
      <style>{`
        body { margin: 0; }
        .event-card { width: 28%; }

        @media (max-width: 1024px) {
          .event-card { width: 45%; }
        }

        @media (max-width: 600px) {
          .event-card { width: 100%; }
        }
      `}</style>

      <h1
        style={{
          textAlign: "center",
          color: "white",
          marginBottom: "30px",
          fontWeight: "700"
        }}
      >
        All Events
      </h1>

      {events.length === 0 ? (
        <p style={{ color: "white", textAlign: "center" }}>
          No events found
        </p>
      ) : (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            justifyContent: "center"
          }}
        >
          {events.map(event => (
            <a
              key={event._id}
              href={`/event/${event._id}`}
              className="event-card"
              style={{ textDecoration: "none" }}
            >
              <div
                style={{
                  backgroundColor: "white",
                  padding: "14px",
                  borderRadius: "6px",
                  color: "black",
                  cursor: "pointer"
                }}
              >
                <h3 style={{ fontSize: "20px", fontWeight: "700" }}>
                  {event.eventName}
                </h3>

                <p><strong>Date:</strong> {event.date}</p>
                <p><strong>Time:</strong> {event.time}</p>
                <p><strong>Location:</strong> {event.location}</p>
                <p><strong>Place:</strong> {event.place}</p>
                <p><strong>Seats:</strong> {event.seats}</p>
                <p><strong>Amount:</strong> ₹{event.amount}</p>
                <p><strong>Note:</strong> {event.restriction}</p>
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
