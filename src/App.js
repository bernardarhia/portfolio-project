import React,{useState} from "react";
import Login from "./pages/Login";
import {BrowserRouter as Router, Switch} from 'react-router-dom'
import Signup from "./pages/Signup";
import PublicRoute from "./routes/PublicRoute";
function App() {
  return (
    <>
    <Router>
      <Switch>
        <PublicRoute exact path="/login" component={Login} />
        <PublicRoute exact path="/signup" component={Signup}/>
      </Switch>
    </Router>
    </>
  );
}
export default App;