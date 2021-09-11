import logo from './logo.svg';
import './App.css';
import Nav from "./Component/Nav";
import Home from "./Component/Home"
import About from "./Component/About"
import Contact from "./Component/Contact"
import Register from "./Component/Register"
import Logout from "./Component/Logout"

import { BrowserRouter ,Switch, Route, Link } from "react-router-dom"
import Login from "./Component/Login"
import Error from "./Component/Error"

import Dairy from "./Component/Appsss"

import { createContext, useReducer,useContext } from 'react';





  export const UserContext =  createContext();
  
  const initialstate = null
  const Reducer = ( state , action) => {

    if(action.type === "USER"){
        return action.payload
    }

    return state
}
  
  function App() {
  
  const Routing = ()=>{
    return(
      <>
       <Nav/>
         <Switch>
             <Route exact path= "/" component = {Home}/>
             <Route exact path= "/about" component = {About}/>
             <Route exact path= "/contact" component = {Contact}/>
             <Route exact path= "/register" component = {Register}/>
             <Route exact path= "/login" component = {Login}/>
             <Route exact path= "/diary" component = {Dairy}/>
             <Route exact path= "/logout" component = {Logout}/>
             <Route component={Error}/>
         </Switch>
      </>
    )
  }


  const [state , dispatch] = useReducer(Reducer , initialstate)
  return (
   
      <>
     <UserContext.Provider  value={{state, dispatch}}>
      <Routing/>
   </UserContext.Provider> 
     
      </>
  )
}


export default App;
