import React, {   useEffect, useState }  from "react"

import { useHistory } from "react-router-dom";

import "./main.css"

import CreatNote from  "./component2/CreatNote"
import Notes from "./component2/Note"
import {axoisIN} from "../config"


const App =()=>{
 
  const [Additem ,setAdditem ]= useState([])
  const history = useHistory()
     
     
     
  const check= async()=>{
     try{
         const res = await fetch("/dairy",{
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


  const addnote = (note)=>{

   setAdditem ((predata)=>{
     return [...predata , note]
      
   });
   console.log(note);
  }


  const ondelete=(id)=>{
    setAdditem((olddata)=>
    olddata.filter((currentdata,index)=>{

        return index!==id; 
    })
    )
  }
 return(
  <>
     
   
   <CreatNote passnote = {addnote}/>
   
  { Additem.map((val,index)=>{
     return <Notes 
        key={index}
        id ={index}
        tittle ={val.tittle}
        content = {val.content}  
        deleteitem ={ondelete}

     />
   })}
  </>
 )
}



export default App;
