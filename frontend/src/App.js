import React,{useContext} from "react";
import Login from "./pages/Login";
import {BrowserRouter as Router, Switch} from 'react-router-dom'
import Signup from "./pages/Signup";
import PublicRoute from "./routes/PublicRoute";
import Final from "./pages/Final";
import {userContext} from "./context/userContext";
import Home from "./pages/Home";
import PrivateRoute from "./routes/PrivateRoute";
import Dashboard from "./pages/Dashboard";
import Account from "./pages/Account";
import Editor from "./pages/Editor";
import NotFound from "./pages/NotFound";
import Template_1 from "./template_1/template_1";
// dotenv.config()
import template_1 from "./templates/template_1/template_1";
function App() {
  const {user} = useContext(userContext);
  return (
    <Router>
      <Switch>
        <PublicRoute exact path="/" component={Home} />
        <PublicRoute exact path="/login" component={Login} />
        <PublicRoute exact path="/editor" component={Editor} />
        <PublicRoute exact path="/signup" component={Signup}/>
        <PublicRoute exact path="/final" component={Final} />
        <PublicRoute exact path="/template1" component={template_1} />
        <PrivateRoute exact path="/dashboard" isAuthenticated={user.isAuth} component={Dashboard}  user={user}/>
        <PrivateRoute exact path="/account" isAuthenticated={user.isAuth} component={Account}  user={user}/>
      </Switch>
    </Router>
  );
}
export default App;