const express = require("express");
require("./config");
const User = require("./user");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

const app = express();
app.use(express.json());

app.get("/", async (req, res) => {
  let result = await User.find();
  console.log("result", result);
  res.send(result);
});

app.post("/create", async (req, res) => {
  const user = new User(req.body);
  const result = await user.save();
  res.send(result);
});

app.put("/update/:_id", async (req, res) => {
  const user = await User.updateOne(req.params, { $set: req.body });
  console.log("user", user);
  res.send(user);
});

app.delete("/delete/:_id", async (req, res) => {
  const result = await User.deleteOne(req.params);
  res.send(result);
});

app.get("/search/:query", async (req, res) => {
  const result = await User.find({
    $or: [
      // -----------singal field search------------
      //    {"first_name": {$regex: req.params.query}}

      //----------multiple fileds search-----------
      { first_name: { $regex: req.params.query } },
      { last_name: { $regex: req.params.query } },
    ],
  });
  res.send(result);
});

// ----------file upload function---------------
const fileUpload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads");
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + "-" + Date.now() + ".jpg");
    },
  }),
}).single('user_file')

app.post("/upload", fileUpload, (req, res) => {
  res.send("uploaded");
});

app.listen(5000);
