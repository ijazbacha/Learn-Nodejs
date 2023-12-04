const dbConnect = require("./connectMongodb");
const getUserData = require("./getDataFromMongodb");

const deleteData = async () => {
  const db = await dbConnect();
  const collection = db.collection("user");
  const result = await collection.deleteOne({ first_name: "khan" });
  if (result.acknowledged) {
    getUserData;
  }
};

deleteData();
