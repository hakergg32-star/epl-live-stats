
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    name: "Football Match Prediction AI",
    status: "online",
    message: "Server is running"
  });
});

app.get("/api/predict", (req, res) => {
  const { home, away } = req.query;

  if (!home || !away) {
    return res.status(400).json({
      error: "home and away team names are required"
    });
  }

  res.json({
    homeTeam: home,
    awayTeam: away,
    prediction: "Insufficient match data",
    note: "Connect real football statistics to generate a meaningful prediction."
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
