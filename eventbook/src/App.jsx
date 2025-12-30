import { Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import Browse from "./Browse.jsx";
import Login from "./Login.jsx";
import Signup from "./Signup.jsx";
import Register from "./Register.jsx";
import Create from "./Create.jsx";
import Show from "./Show.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/browse" element={<Browse />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/register" element={<Register />} />
      <Route path="/create" element={<Create />} />
      <Route path="/event/:id" element={<Show />} />
    </Routes>
  );
}
