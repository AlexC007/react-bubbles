import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => {
        if (localStorage.getItem("token")) {
          return <Component />;
        } else {
          console.log(
            "Invalid, redirecting"
          );
          return <Redirect to="/api/login" />;
        }
      }}
    />
  );
};

export default PrivateRoute;