const dbConnect = require('./connectMongodb');
const getUserData = require('./getDataFromMongodb');


const insertData = async () =>{
    const db = await dbConnect()
    const collection = db.collection('user');
    const result = await collection.insertOne({first_name:'khan', last_name:'khan', email:"khan@gmail.com", contact: 12345567890})
    if(result.acknowledged){
         getUserData
    }
}

insertData()