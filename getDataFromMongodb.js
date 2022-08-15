const dbConnect = require('./connectMongodb')

const getDB = async () =>{
    let db = await dbConnect()
    console.log('dbConnect', db);
    const collection = db.collection('user');
  let userList = await collection.find({}).toArray()
  console.log('collection', userList);
}
getDB()