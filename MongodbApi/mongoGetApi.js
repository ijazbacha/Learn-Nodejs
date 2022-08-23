const dbConnect = require("../connectMongodb");
const express = require("express");

const app = express();

app.get("/", async (req, res) => {
  const db = await dbConnect();
  const userCollection = db.collection("user");
  const userData = await userCollection.find().toArray();
  res.send(userData);
});

app.listen(4000, () =>
  console.log("Server is runing on port: http://localhost:4000")
);
