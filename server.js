const express = require("express");
const db = require("./models/index.js");
const app = express();
const port = 4000;

app.get("/healthcheck", async (req, res) => {
  try {
    await db.sequelize.authenticate();
    await db.sequelize.close();
    res.status(200).send("Connected to server");
  } catch (e) {
    await db.sequelize.close();
    res.status(500).send("Unable to connect the database");
    console.log("Error" - e.message);
  }
});

app.listen(port, () => {
  console.log("App is running on port 4000");
});
