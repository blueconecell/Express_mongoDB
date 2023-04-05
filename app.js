const fs = require('fs');
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const MONGO_ID = "blueconecell"
const MONGO_PW = "melon123"

if(!dotenv.parsed.MONGO_ID || !dotenv.parsed.MONGO_PW){
    console.error("Mongo connection error(Credential Missing)")
}else{
    mongoose.connect(`mongodb+srv://${dotenv.parsed.MONGO_ID}:${dotenv.parsed.MONGO_PW}@melon.spvf5th.mongodb.net/test`)
    .then((conn) => {
        console.log(`connected@${conn.connection.host}`);
    })
    .catch((err) => {
        console.error(`connection error:${err.message}`);
    })
}



// mongoose.connect("mongodb+srv://blueconecell:melon123@melon.spvf5th.mongodb.net/test"); 

// const jsonFile = fs.readFileSync('data.json', 'utf8');
// const jsonData = JSON.parse(jsonFile);
// const a = JSON.stringify(jsonData);
// const b = JSON.parse(a);
// const c = JSON.stringify(b.results.trackmatches) 
// const d = JSON.parse(c);
// console.log(d.track[0]);

