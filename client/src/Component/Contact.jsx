import React, {  useState, useEffect } from 'react'
import "./style.css"
import {axoisIN} from "../config"
const Contact = () => {

    const [info , setinfo] = useState({})
       
    const check= async()=>{
        try{
            const res = await fetch("/contact",{
                method : "GET",
                headers:{
                    
                    "contect-Type" : "application/json"
                }
            }) ;

            const data = await res.json();

            setinfo(data)


           
        } catch(e){
              
                console.log(e);
                 }
    }
    useEffect(()=>{
        check();
    },[])
   

  
    return (
        <>
           <div method = "GET" className="main">
               <div className="card12">
                   <div className="phone">
                   
                       <h6>Phone</h6>
                      <h6> 8447424019</h6>
                   </div>
                   <div className="phone">
               
                       <h6>Email</h6>
                      <h6>
                      hackside715@gmail.com
                      </h6>
                   </div>
                   <div className="phone">
                  
                       <h6>Address</h6>
                       
                     <h6> New Delhi,India</h6>
                   </div>
               </div>
           </div>

           {/* get in touch  */}

           <div className="main2">
               <div className="card2">
                   <h3>Get in Touch</h3>
                   <form >
                       <input type="text" placeholder="Your name"  value={info.name} />
                       <input type="text" placeholder="Your Email" value={info.email} />
                       <input type="text" placeholder="Your Phone" value={info.phone} /> 
                       <br />
                       <textarea placeholder="message"></textarea>                      
                   </form>
                   <button  onClick = {()=>{
                       alert("data send")
                   }}className="btn1">Send Message</button>
               </div>
           </div>
        </>
    )
}

export default Contact
