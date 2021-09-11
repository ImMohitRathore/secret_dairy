const mongoose = require("mongoose")

jwt = require("jsonwebtoken")


const usersheme = mongoose.Schema({
    name:{
        type :String,
    required : true},
    email:{
        type :String,
    required : true
},
    phone:{
        type :Number,
        min : 10,
    required : true},
    work:{
        type :String,
    required : true},
   password:{
        type :String,
    required : true},
   cpassword:{
        type :String,
    required : true},
    Tokens :[
        {
            token:{
                
               
            }
        }
    ]
});
//  genrating web token





usersheme.methods.genratetoken = async function(){
    try{
        let tokenMohit = jwt.sign({_id: this._id},"MYNAMEISMOHITRATHOREANDIAMWEBDEVLOPER");
        this.Tokens = this.Tokens.concat({token:tokenMohit})
       await this.save()
       return tokenMohit

        
     }
   catch(e){
    console.log(e)}


   }

   



const User = mongoose.model("USER",usersheme);
module.exports = User
