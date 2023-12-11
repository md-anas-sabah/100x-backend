const express = require("express");
const { Users } = require("./models");
const bcrypt = require("bcryptjs");
const db = require("./models/index.js");

const app = express();
const port = 4000;

app.use(express.json());

app.listen(port, () => {
  console.log("app running on port 4000");
});

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
  console.log(req.body);
  try {
    // const hashedPassword = await bcrypt.hash(req.body.password, 10);

    await Users.create({
      // id: "454",
      // displayName: "verfsdfonica",
      // username: "vefdsfron",
      // email: "verosdfndf@example.com",
      // password: "#er34", // replace with a hashed password
      // bio: "I am strongest.",
      // location: "Vatican city",
      // webiste: "https://veron.com",
      // profilePicUrl: "https://veron.com/profile.jpg",
      // headerPicUrl: "https://veron.com/cover.jpg",
      // dateOfBirth: new Date("1996-08-23"),

      username: req.body.username,
      displayName: req.body.displayName,
      email: req.body.email,
      // password: hashedPassword,
      password: req.body.password,
      bio: req.body.bio,
      location: req.body.location,
      website: req.body.website,
      profilePicUrl: req.body.profilePicUrl,
      headerPicUrl: req.body.headerPicUrl,
      dateOfBirth: new Date(req.body.dateOfBirth),
    });
    console.log(res.body);
    res.status(201).send({ message: "User created!" });
  } catch (error) {
    res.status(500).send({ error: "Failed to Create  user" });
    console.log(error);
  }
});

// app.post('/login',async (req,res)=>{
//     const {email,password} = req.body;
//     try{
//         const user = await User.findOne({where:{email}})
//     }
// })
