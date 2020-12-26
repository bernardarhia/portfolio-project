import React,{useContext, useEffect} from "react";
import Login from "./pages/Login";
import {BrowserRouter as Router, Switch} from 'react-router-dom'
import Signup from "./pages/Signup";
import PublicRoute from "./routes/PublicRoute";
import Final from "./pages/Final";
import {userContext} from "./context/userContext";
import Home from "./pages/Home";
import PrivateRoute from "./routes/PrivateRoute";
import Dashboard from "./routes/Dashboard";
import requests from './apis/requests';
import {verifyToken, Portfolio} from './utils/validateToken'
function App() {
  const {user,setUser} = useContext(userContext);

   
  return (
    <Router>
      <Switch>
        <PublicRoute exact path="/" component={Home} />
        <PublicRoute exact path="/login" component={Login} />
        <PublicRoute exact path="/signup" component={Signup}/>
        <PublicRoute exact path="/final" component={Final} />
        <PrivateRoute exact path="/dashboard" isAuthenticated={user.isAuth} component={Dashboard}  user={user}/>
      </Switch>
    </Router>
  );
}
export default App;