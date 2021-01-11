import React from "react";
import { Route, Redirect } from "react-router-dom";
const PrivateRoute = ({ component: Component, isAuthenticated = true, ...rest }) => {
  return (
    <Route
      render={(props) => {
        if (isAuthenticated) {
          return <Component {...rest} />;
        } else {
          return (
            <Redirect to={{ pathname: "/", state: { from: props.location } }} />
          );
        }
      }}
    ></Route>
  );
};

export default PrivateRoute;
