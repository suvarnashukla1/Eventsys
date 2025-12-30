const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Atlas connected"))
  .catch(err => console.error(err));

const userSchema = new mongoose.Schema(
  {
    username: String,
    email: { type: String, unique: true },
    password: String
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema, "login");

function auth(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: "No token provided" });
  }

  try {
    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch {
    return res.status(401).json({ message: "Invalid token" });
  }
}

app.post("/api/signup", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({ message: "All fields required" });
    }

    const existing = await User.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      username,
      email,
      password: hashedPassword
    });

    await user.save();

    res.json({ message: "Signup successful" });
  } catch {
    res.status(500).json({ message: "Server error" });
  }
});

app.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.json({ token });
  } catch {
    res.status(500).json({ message: "Server error" });
  }
});

const eventSchema = new mongoose.Schema(
  {
    eventName: String,
    location: String,
    place: String,
    seats: Number,
    amount: Number,
    restriction: String,
    date: String,
    time: String,
    createdBy: String
  },
  { timestamps: true }
);

const Event = mongoose.model("Event", eventSchema, "events");

app.post("/api/events", auth, async (req, res) => {
  try {
    const {
      eventName,
      location,
      place,
      seats,
      amount,
      restriction,
      date,
      time
    } = req.body;

    const event = new Event({
      eventName,
      location,
      place,
      seats,
      amount,
      restriction,
      date,
      time,
      createdBy: req.user.email
    });

    await event.save();

    res.json({ message: "Event created successfully" });
  } catch {
    res.status(500).json({ message: "Failed to create event" });
  }
});

app.get("/api/events", async (req, res) => {
  try {
    const events = await Event.find({});
    res.json(events);
  } catch {
    res.status(500).json({ message: "Failed to fetch events" });
  }
});
app.get("/api/events/:id", async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    res.json(event);
  } catch {
    res.status(404).json({ message: "Event not found" });
  }
});

app.get("/api/protected", auth, (req, res) => {
  res.json({
    message: "JWT verified",
    user: req.user
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
