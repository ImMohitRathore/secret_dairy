import React, { useEffect ,useContext } from "react";

import { useHistory } from "react-router-dom";
import {UserContext} from "../App"
import {axoisIN} from "../config"

const Logout = () => {

  const {state  ,dispatch} = useContext(UserContext)
    const history = useHistory()
    const logout = async () => {
       
      const res = await fetch("/logout", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
       if(res.status === 200){
         window.alert("logout")
       }

      
    };
    dispatch({type:"USER" , payload:false})
    history.push("./login")
  
  


  useEffect(() => {
    logout();
  });
  return (
    <div method ="GET">
      <h1>dfdf</h1>
    </div>
  );
};

export default Logout;
