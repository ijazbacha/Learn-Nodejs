const dbConnect = require("../connectMongodb");
const express = require("express");
const { application } = require("express");

const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
  const db = await dbConnect();
  const userCollection = db.collection("user");
  const userData = await userCollection.find().toArray();
  console.log("userData", userData.length);
  res.send(userData);
});

app.post("/createUser", async (req, res) => {
  const userData = req.body;
  console.log("userData", userData);
  const db = await dbConnect();
  const userCollection = db.collection("user");
  const newUser = await userCollection.insert(userData);
  if (newUser.acknowledged) {
    res.send("User " + userData.first_name + " Successfully Created");
  }
});

app.put('/updateUser/:name', async (req, res) =>{
  const db = await dbConnect()
  const userCollection = db.collection('user')
  const result = await userCollection.updateOne({first_name: req.params.name}, {$set:req.body})
  if(result.acknowledged){
    res.send("User " + req.params.name + " Successfully Updated")
  }
})

app.delete('/removeUser/:name', async (req, res) =>{
  const db = await dbConnect()
  const userCollection = db.collection('user')
  const result = await userCollection.deleteOne({first_name: req.params.name})
  if(result.deletedCount > 0){
    res.send("User " + req.params.name + " Successfully Delete")
  }else{
    res.send("User " + req.params.name + " is not Available")
  }
})

app.listen(4000, () =>
  console.log("Server is runing on port: http://localhost:4000")
);
