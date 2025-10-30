const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.post(`/api/clients`, (req, res) => {
  const client = req.body;
  res.json({ status: "success", received: client });
});

module.exports = app;
