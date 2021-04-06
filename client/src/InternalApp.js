import React, { useState, useEffect } from "react";
import Dashboard from "./Components/Pages/Dashboard";
// import NoMatch from "./Pages/NoMatch";
// import PlanTrip from "./Pages/PlanTrip";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import PastTrip from "./Pages/PastTrip";
// import CurrentTrip from "./Pages/CurrentTrip";
import SignOut from './Components/AuthForm/SignOut'


function InternalApp(props) {
  
  
    return (
      <>
        <Router>
          <div>
           <h1>Logged In!!</h1>
           <SignOut />
              <Switch>
                <Route exact path="/">
                  <Dashboard />
                </Route>
                {/* <Route exact path="/plantrip">
                  <PlanTrip />
                </Route>
                <Route exact path="/pasttrip">
                  <PastTrip />
                </Route>
                <Route exact path="/currenttrip">
                  <CurrentTrip />
                </Route>
                <Route component={NoMatch} /> */}
              </Switch>
         
          </div>
        </Router>
      </>
    );
 
}

export default InternalApp;
