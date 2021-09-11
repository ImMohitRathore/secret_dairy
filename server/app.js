  const express=require("express");
  const mongoose = require("mongoose")
  var cookieParser = require('cookie-parser')
 require("dotenv").config();

  
  const   app = express();
  app.use(cookieParser())

require("./DB/conn")


app.use(express.json())
// link the router 
app.use(require("./router/auth"))





 





  app.listen(process.env.PORT ||5000,(req ,res)=>{
    console.log(`${process.env.PORT} connected`);
  })

  
