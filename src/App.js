import React from "react";
import NavBar from "./components/navbar";
import LandingPage from "./components/landingpage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Data from "./components/data_container";
import bg from "./bg.jpg";
import LogIn from "./components/login";
import Logout from "./components/logout";
import PrivateRoute from "./components/private";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <div
            style={{
              width: "100%",
              height: "100%",
              backgroundImage: `url(${bg})`
            }}
          >
            <NavBar>
              <LandingPage />
            </NavBar>
          </div>
        </Route>
        <PrivateRoute path="/home">
          <Data />
        </PrivateRoute>
        <Route path="/login">
          <LogIn />
        </Route>
        <Route path="/logout">
          <Logout />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
