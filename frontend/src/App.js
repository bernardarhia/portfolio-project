import React,{useContext} from "react";
import Login from "./pages/Login";
import {BrowserRouter as Router, Switch} from 'react-router-dom'
import Signup from "./pages/Signup";
import PublicRoute from "./routes/PublicRoute";
import Final from "./pages/Final";
import {userContext} from "./context/userContext";
// import Home from "./pages/Home";
import PrivateRoute from "./routes/PrivateRoute";
import Dashboard from "./pages/Dashboard";
import Account from "./pages/Account";
import Editor from "./pages/Editor";
import NotFound from "./pages/NotFound";
import EarlyAccess from "./pages/EarlyAccess";
// dotenv.config()
function App() {
  const {user} = useContext(userContext);
  return (
    <Router>
      <Switch>
        <PublicRoute exact path="/" component={EarlyAccess} />
        <PublicRoute exact path="/login" component={Login} />
        <PublicRoute exact path="/signup" component={Signup}/>
        <PrivateRoute exact path="/final" component={Final} />
        <PrivateRoute exact path="/dashboard" isAuthenticated={user.isAuth} component={Dashboard}  user={user}/>
        <PrivateRoute exact path="/account" isAuthenticated={user.isAuth} component={Account}  user={user}/>
        <PrivateRoute exact path="/editor" isAuthenticated={user.isAuth} component={Editor}  user={user}/>
        <PublicRoute exact component={NotFound}/>
      </Switch>
    </Router>
  );
}
export default App;

/*
        <PublicRoute exact path="/login" component={Login} />
        <PublicRoute exact path="/signup" component={Signup}/>
        <PrivateRoute exact path="/final" component={Final} />
        <PrivateRoute exact path="/dashboard" isAuthenticated={user.isAuth} component={Dashboard}  user={user}/>
        <PrivateRoute exact path="/account" isAuthenticated={user.isAuth} component={Account}  user={user}/>
        <PrivateRoute exact path="/editor" isAuthenticated={user.isAuth} component={Editor}  user={user}/>
        <PublicRoute exact component={NotFound}/>
*/