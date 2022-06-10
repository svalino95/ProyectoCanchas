require('dotenv').config();
const mogoclient = requiere('mongodb').MongoClient;
const uri = process.env.MONGODB;
const client = new mogoclient(uri);

let instance = null;

async function getConnection(){
    if(instance == null){
       instance = await client.connect();   
    }
    return instance;
}

module.exports = {getConnection};

