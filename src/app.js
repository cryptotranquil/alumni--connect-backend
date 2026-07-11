const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to Exploits University Alumni Backend API 🚀"
  });
});

// User routes
app.use("/api/users", userRoutes);

module.exports = app;