let user = require("../Collections/User")
let bcrypt = require("bcrypt")

let main_functions = { 
     Home : async function(req,res){
        res.send("Home Page")
        res.end();
    
    },

    register_user: async function (req, res) {
        try{ 

             let {name,email,password,age} = req.body;
             let checkemail = await user.findOne({email : email})
             if(checkemail){
                return res.status(409).json({msg:"Email Already Exist"})

             }
           else{ 
            let encrypted_pswd = bcryt.hashSync(password, 15)
            let user_data = new user(req.body);
            let create = await user_data.save();
            res.status(200).json({ msg: "User created successfully", data: create });
           }
      
        
        }catch (error) {
           return res.status(501).json({ msg: error.message })
        }
    }
   
    }
    
    module.exports = main_functions;