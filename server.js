const express = require("express");
const { Users } = require("./models");
const bcrypt = require("bcryptjs");
const db = require("./models/index.js");

const app = express();
app.use(express.json());

const port = 4000;

app.get("/healthcheck", async (req, res) => {
  try {
    await db.sequelize.authenticate();
    await db.sequelize.close();
    res.status(200).send("I'm healthy!");
  } catch (error) {
    await db.sequelize.close();
    res.status(500).send("Unable to connect to the sever");
  }
});

app.post("/signup", async (req, res) => {
  try {
    const saltCount = 10;
    const hashedPassword = await bcrypt.hash(req.body.password, saltCount);
    await Users.create({
      displayName: req.body.displayName,
      username: req.body.username,
      email: req.body.email,
      location: req.body.location,
      bio: req.body.bio,
      password: hashedPassword,
      website: req.body.website,
      dateOfBirth: new Date(req.body.dateOfBirth),
      profilePicUrl: req.body.profilePicUrl,
      headerPicUrl: req.body.headerPicUrl,
    });

    res.status(201).send({ message: "User created!" });
  } catch (error) {
    res.status(500).send({ error: "Failed to Create  user" });
    console.log(error);
    console.log(req.body);
  }
});

app.listen(port, () => {
  console.log("app running on port 4000");
});
