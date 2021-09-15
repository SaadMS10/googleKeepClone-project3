
import React from "react";
import {
  Switch,
  Route,
 
} from "react-router-dom";
import Archive from "../components/Archive"
import Home from "../components/Home";
import Thrash from "../components/Thrash"
import Search from "../components/Search"
const Routing=()=>{
    return(
       
        <Switch>
                <Route exact path="/search">
                  <Search/>
                  </Route>
        <Route exact path="/archive">
         <Archive/>
        </Route>
        <Route exact path="/trash">
          <Thrash/>
        </Route>
        <Route exact  path="/">
      <Home/>
        
        </Route>
      </Switch>
  
    )
}
export default Routing;