const express = require("express")

const router = express.Router()
var cookieParser = require('cookie-parser')
var validator = require("email-validator");
 


const jwt = require("jsonwebtoken")


require("../DB/conn")


const User = require("../model/userScheme")

const middle = require("../Middleware/middle")







router.get("/",(req,res)=>{
    res.send("hello this is an home page router")})

    


    router.post("/register",(req,res)=>{
       console.log(req.body)
    const {name, email , phone, work, password , cpassword} = req.body; 

    if(!name|| !email || !phone || !work|| !password || !cpassword){
        return res.status(422).json({error:"plz enter all field data"})
    } 

    if(phone <9 && phone>11){
        return res.status(423).json("numder sehi se bal na ") 
    }

    if(password < 7){
        return res.status(425).json("plz enter above 6 digit password ") 
    }
   

    // mail already exist code
    User.findOne({email:email})
    .then((userExist)=>{
        if(userExist){
            return res.status(421).json({error:"email already exist"})
        } else if(password!=cpassword){
            return res.status(424).json({error:"password doesn't match"})

        }

        const user = new User({name, email , phone, work, password , cpassword})

        user.save().then(()=>{
            res.status(201).json("registered ")
        }).catch((e)=>{
            res.status(500).json("not registered")
        }) 
       
      
 
      
    }).catch((e)=>{
     console.log(e);

    })

    })


// login


router.post("/login", async (req,res)=>{

   
    
    
    try{
    const {email , password} = req.body ;

    if(!email || !password){
        return res.status(400).json("filled the data")
    }

    const userlogin = await User.findOne({email:email, password:password})
   
    // genrating toekn and store in cookies
    const token = await  userlogin.genratetoken()
    console.log(token)
    res.cookie("jwttoken",token,{
        http: true
        })

       
      
        if(!userlogin){
            return res.status(401).json("user eror") 
        } else {
            res.json("user login")
            
        }
        // check  
}catch(eror){
    console.log(eror)
}
})



router.get("/about", middle, (req ,res)=>{
   

res.send(req.rootUser);
})


router.get("/contact",middle,(req,res)=>{
res.send(req.rootUser)
})


router.get("/dairy",middle,(req,res)=>{
    res.send(req.rootUser)
    })


router.get("/logout",(req,res)=>{
    res.clearCookie("jwttoken")
    res.status(200).send("user logout")
   
    })

    











  

module.exports = router

