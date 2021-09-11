import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";
import App from "../App";
import Archive from "../components/Archive"
import Home from "../components/Home";
import NotesCard from "../components/NotesCard";
import Thrash from "../components/Thrash"
const Routing=()=>{
    return(
       
        <Switch>
        <Route exact path="/archive">
         <Archive/>
        </Route>
        <Route exact path="/thrash">
          <Thrash/>
        </Route>
        <Route exact  path="/">
      <Home/>
        
        </Route>
      </Switch>
  
    )
}
export default Routing;