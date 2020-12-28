import React,{useContext} from "react";
import Login from "./pages/Login";
import {BrowserRouter as Router, Link, Switch} from 'react-router-dom'
import Signup from "./pages/Signup";
import PublicRoute from "./routes/PublicRoute";
import Final from "./pages/Final";
import {userContext} from "./context/userContext";
import Home from "./pages/Home";
import PrivateRoute from "./routes/PrivateRoute";
import Dashboard from "./pages/Dashboard";
import Account from "./pages/Account";
import Editor from "./pages/Editor";
import ToolbarContext from "./context/toolbarContext";
function App() {
  const {user} = useContext(userContext);
  return (
    <Router>
      <Switch>
        <PublicRoute exact path="/" component={Home} />
        <PublicRoute exact path="/login" component={Login} />
        <PublicRoute exact path="/signup" component={Signup}/>
        <PublicRoute exact path="/final" component={Final} />
        <PrivateRoute exact path="/dashboard" isAuthenticated={user.isAuth} component={Dashboard}  user={user}/>
        <PrivateRoute exact path="/account" isAuthenticated={user.isAuth} component={Account}  user={user}/>
        <ToolbarContext>
        <PublicRoute exact path="/editor" isAuthenticated={user.isAuth} component={Editor}  user={user}/>
        </ToolbarContext>
        <PublicRoute exact  component={()=><><h1>NOT FOUND</h1><Link to="/">Go Home</Link> </>} />
      </Switch>
    </Router>
  );
}
export default App;