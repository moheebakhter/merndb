let exp = require("express");

let co = require("../Functions/Logic")

let r = exp.Router();

r.get("/i",co.Home);
r.post("/reg",co.register_user);



module.exports = r;