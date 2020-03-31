import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import {Route, Router, Switch, Redirect} from "react-router-dom";
import Homepage from "./pages/Homepage.js";
import CandidatePage from "./pages/CandidatePage.js";
import CreateCandidate from "./pages/CreateCandidate.js";

export default function App() {
  let [user,setUser] = useState({isAuthenticated:true})
    return(
    <div>
    <Router>
    <Switch>
    <Route path='/createcandidate' exact>
            <CreateCandidate />
          </Route>
    <Route
      exact
      user={user}
      path="/candidates"
      component={CandidatePage}
    />

    <Route path='/' exact>
            <Homepage/>
    </Route>
    
    <Route
      user={user}
      path="/candidates/:id"
      component={CandidatePage}
    />
  </Switch>
    </Router>
  </div>
  )}

  const Guest = props => {
    console.log("Guest props", props);
    return (
      <div>
        <h1>This is a Guest Page</h1>
      </div>
    );
  };
  
  function User(props) {
    console.log("User props", props);
    return (
      <div>
        <h1>This is a User Page</h1>
      </div>
    );
  }
  
  const ProtectedRoute = props => {
    console.log("ProtectedRoute props", props);
    return props.authenticated ? (
      <Route {...props} render={() => <User {...props} />} />
    ) : (
      <Redirect to="/guest" />
    );
  };
