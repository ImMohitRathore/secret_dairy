const jwt = require("jsonwebtoken");
 const User =  require("../model/userScheme");
 var cookieParser = require('cookie-parser')

const middle =  async(req , res , next ) =>{
    
    try{
    const token = req.cookies.jwttoken;
    if(!token) return res.status(401).send("access denied")


    // const VerifyToken = jwt.verify(token , "MYNAMEISMOHITRATHOREANDIAMWEBDEVLOPER")

    const rootUser= await User.findOne({ "Tokens.token" : token})

    if(!rootUser){ console.log("User not found")}

    req.rootUser = rootUser
    next();

}catch(e){
    res.status(304).send("Unauthorize acsess")
    console.log(e);
}
}


module.exports = middle;