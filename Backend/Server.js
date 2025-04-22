let express = require('express');
let r = require("./Routing/Rout");
let port = process.env.PORT || 3002;
let db = require("./Connect");
let user = require("./Collections/User")
let cors =require("cors");
require("dotenv").config()

let application = express();
//json

application.use(cors());
application.use(express.json())
application.use("/web/",r);

let add_user = async function(){
    try{
        user.create({
            name:"Moheeb",
            email:"moheeb10@gmail.com",
            password:"123",
            age:22
        })
        console.log("User Record Added")
    }catch (error) {
        console.log(error)
    }
}

db().then(()=>{
    // add_user()

    application.listen(port,()=>{
        console.log(`Server Started at http://localhost:${port}/web/`)
    })
}).catch((e)=>{
    console.log(e)
})

// let port = process.env.PORT || 3002
// let application = express();

// application.use("/web/",r);

// application.listen(port,()=>{
//     console.log(`Server started at http://localhost:${port}/web/`)
// }).catch((e)=>{
//     console.log(e)
// })




// let add_user=async function(){
//     try {
//         user.create({
//             name:"Shibra",
//             email:"shibra@gmail.com",

//         })
//     }
// }