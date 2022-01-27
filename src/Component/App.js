import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import Home from "./HomeBudget";
import Signin from "./Signin";
import Signup from "./Signup";
import Header from "./Header";
import Footer from './Footer';

export default function Todo(props){
  
  return (
    <Router>     
    <div className="App">
     <ul className="App-header">   
     </ul>
     <Switch>  
       <Route exact path='/home' component={Home}></Route>
       <Route exact path='/signup' component={Signup}></Route>
       <Route exact path='/signin' component={Signin}></Route>
    
     </Switch>
   </div>
   <Footer/>
</Router>
  );
}


