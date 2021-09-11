import React, { useEffect } from 'react'

import { useHistory } from "react-router-dom";

import {axoisIN} from "../config"

 const profile= "https://freesvg.org/img/winkboy.png"
 
 const About = () => {
     const history = useHistory()
     
     
     
     const check= async()=>{
        try{
            const res = await fetch("/about",{
                method : "GET",
                headers:{
                    Accept : "application/json",
                    "contect-Type" : "application/json"
                },
                credentials : "include"
            }) ;

            const data = await res.json();
            console.log(data);

            
        } catch(e){
               history.push('/')
                console.log(e);
                 }
    }
    useEffect(()=>{
        check();
    },[])
   
    return (
        <>
        <div  method= "GET" className="main">
            <div className="card">
                <div className="about-left"> 
                <img src={profile} alt="" />
                </div>
                    <div className="profile">
                        <h4>Mohit Rathore</h4>
                        <h5>Web devloper</h5>
                <div className="about-right">
                        <div className="form">
                            <h3>About</h3>
                            <hr />
                            <label >User ID</label>
                            <p>125423535423452</p>
                            <label >Name</label>
                            <p>Mohit Rathore</p>
                            <label >Email ID</label>
                            <p>hackside715@gmail.com</p>
                            <label >Phone</label>
                            <p>8447424019</p>
                            <label >Profession</label>
                            <p>Web Dev</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default About
