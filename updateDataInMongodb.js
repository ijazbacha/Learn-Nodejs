const dbConnect = require('./connectMongodb')
const getUserData = require('./getDataFromMongodb');


const updateData = async () =>{
    const db = await dbConnect()
    const collection = db.collection('user')
    const result = await collection.updateOne(
        {first_name: "khan"},{
            $set:{first_name: 'peter', email:'peter@gmial.com'}
        }
    )
    if(result.acknowledged){
        getUserData
   }
}

updateData()