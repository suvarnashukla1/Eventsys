import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PayPalButtons } from "@paypal/react-paypal-js";

export default function Show() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    async function fetchEvent() {
      try {
        const response = await fetch(`http://localhost:5000/api/events/${id}`);
        const result = await response.json();
        setEvent(result);
      } catch {
        alert("Error loading event");
      }
    }

    fetchEvent();
  }, [id]);

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
    
    

      {event && (
        <div
          style={{
            maxWidth: "500px",
            margin: "auto",
            border: "1px solid black",
            padding: "24px",
            backgroundColor: "white",
            color: "black"
          }}
        >
          <h2 style={{ fontSize: "22px", fontWeight: "700" }}>
            {event.eventName}
          </h2>

          <p><strong>Date:</strong> {event.date}</p>
          <p><strong>Time:</strong> {event.time}</p>
          <p><strong>Location:</strong> {event.location}</p>
          <p><strong>Place:</strong> {event.place}</p>
          <p><strong>Seats:</strong> {event.seats}</p>
          <p><strong>Amount:</strong> ₹{event.amount}</p>
          <p><strong>Note:</strong> {event.restriction}</p>

          <PayPalButtons
            style={{ layout: "vertical" }}
            createOrder={(data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: event.amount.toString()
                    }
                  }
                ]
              });
            }}
            onApprove={(data, actions) => {
              return actions.order.capture().then(() => {
                alert("Payment successful");
              });
            }}
          />
        </div>
      )}
    </div>
  );
}
