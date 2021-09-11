const mongoose = require("mongoose")

const DB = "mongodb+srv://mohit844:mohit844@cluster0.9k9bu.mongodb.net/mern?retryWrites=true&w=majority"


mongoose.connect(DB,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology : true,
    useFindAndModify: false
  }).then(()=>{
    console.log("connect");
  }).catch((eror)=>{
    console.log("sorry no connect");
  })