const express = require("express");
const { Users } = require("./models/users.js");
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
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    await Users.create({
      username: req.body.username,
      displayName: req.body.displayName,
      email: req.body.email,
      location: req.body.location,
      bio: req.body.bio,
      password: hashedPassword,
      website: req.body.website,
      dateOfBirth: new Date(req.body.dateOfBirth),
      profilePicUrl: req.body.profilePicUrl,
      headerPicUrl: req.body.headerPicUrl,
    });
    console.log(req.body.username);
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
