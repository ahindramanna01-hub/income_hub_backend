const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    name: "INCOME HUB OTP",
    status: "online"
  });
});

app.get("/api/health", (req, res) => {
  res.json({ success: true });
});

app.listen(process.env.PORT || 3000, "0.0.0.0");
