let mongo = require("mongoose");
require("dotenv").config();
let atlas_url = process.env.KUCHBHI;
let db_connect = async function(){
    mongo.connect(atlas_url).then(()=>{
        console.log("Connected to MongoDB AAtlas");

    }).catch((e)=>{
        console.log(e);
    })
}
module.exports = db_connect