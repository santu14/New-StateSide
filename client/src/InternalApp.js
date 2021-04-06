import React from "react";
import Dashboard from "./Components/Pages/Dashboard";
import NoMatch from "./Components/Pages/NoMatch";
import PlanTrip from "./Components/Pages/PlanTrip";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import PastTrip from "./Pages/PastTrip";
import CurrentTrip from "./Components/Pages/CurrentTrip";



function InternalApp() {
  
  
    return (
      <>
        <Router>
          <div>
              <Switch>
                <Route exact path="/">
                  <Dashboard />
                </Route>
              <Route exact path="/plantrip">
                  <PlanTrip />
                </Route>
                {/* <Route exact path="/pasttrip">
                  <PastTrip />
                </Route> */}
                <Route exact path="/currenttrip">
                  <CurrentTrip />
                </Route>
                <Route component={NoMatch} />
              </Switch>
         
          </div>
        </Router>
      </>
    );
 
}

export default InternalApp;
