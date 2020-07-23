const express = require("express");

const app = express();
app.get("/", (req, res) => {
  res.json({ message: "olá" });
});

app.listen(3001);
