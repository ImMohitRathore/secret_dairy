import React from 'react'
import { useHistory } from "react-router-dom";
import img from "../image/undraw_feeling_proud_qne1.svg"
import "./style.css"

const Home = () => {
    const  history = useHistory()
    return (
        
            <>
        <div>
           <div className="container">
               <div className="lefft">
               <img src={img} alt="" />
               <h1>Hello I'm <span className="change_content"></span></h1>
               <div className="circle"></div>
               </div>
               <div className="righht">
                    <h1>Welcome</h1>
                    
                    <p>
                        Hello every one i'm <span>Mohit Rathore</span>and i'm <span> mern devloper</span> <br/>This is first ever porject On full stack devlopment . In this project i have use all the latest techlogies like <span> MongoDB, Express, React, Nodejs </span>
                    </p>
                    <button  onClick={()=>{  history.push("/register")}} id="to_login">Get Started</button>
                    
               </div>

           </div>
        </div>
    
        </>
    )
}

export default Home;
