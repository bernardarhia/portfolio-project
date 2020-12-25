import React from "react";
import { Route, Redirect } from "react-router-dom";
const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => {
  return (
    <Route
      render={(props) => {
        if (isAuthenticated) {
          return <Component {...rest} />;
        } else {
          return (
            <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
          );
        }
      }}
    ></Route>
  );
};

export default PrivateRoute;
