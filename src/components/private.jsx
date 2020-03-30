import React from "react";
import { Route, Link } from "react-router-dom";
import { Button } from "semantic-ui-react";

const PrivateRoute = ({ children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        sessionStorage.getItem("loggedin") === "true" ? (
          children
        ) : (
          <div>
            <h1>No Active user detected, Please login</h1>
            <Link to="/login">
              <Button color="blue">Login</Button>
            </Link>
          </div>
        )
      }
    />
  );
};

export default PrivateRoute;
