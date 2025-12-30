import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import App from "./App";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <PayPalScriptProvider
      options={{
        "client-id": import.meta.env.VITE_PAYPAL_CLIENT_ID,
       
      }}
    >
      <App />
    </PayPalScriptProvider>
  </BrowserRouter>
);

