import { useEffect, useState } from "react";

export default function Browse() {
  const [events, setEvents] = useState([]);
  const [month, setMonth] = useState("all");

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

  const filteredEvents =
    month === "all"
      ? events
      : events.filter(e => {
          if (!e.date) return false;
          return new Date(e.date).getMonth().toString() === month;
        });

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
          marginBottom: "20px",
          fontWeight: "700"
        }}
      >
        All Events
      </h1>

      <div style={{ marginBottom: "30px" }}>
        <select
          value={month}
          onChange={e => setMonth(e.target.value)}
          style={{
            padding: "10px",
            fontSize: "14px",
            backgroundColor: "white",
            color: "black",
            border: "none",
            outline: "none"
          }}
        >
          <option value="all">All Months</option>
          <option value="0">January</option>
          <option value="1">February</option>
          <option value="2">March</option>
          <option value="3">April</option>
          <option value="4">May</option>
          <option value="5">June</option>
          <option value="6">July</option>
          <option value="7">August</option>
          <option value="8">September</option>
          <option value="9">October</option>
          <option value="10">November</option>
          <option value="11">December</option>
        </select>
      </div>
      {filteredEvents.length === 0 ? (
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
          {filteredEvents.map(event => (
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
