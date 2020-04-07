import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Dashboard from '../containers/Dashboard';
import IntegrationScreen from '../containers/IntegrationScreen';
import ReportsScreen from '../containers/ReportsScreen';

export const routes = () => (
  <Router>
    <Switch>
      <Route exact path="/"><Dashboard /></Route>
      <Route exact path="/integration"><IntegrationScreen /></Route>
      <Route exact path="/reports"><ReportsScreen /></Route>
      <Redirect from="*" to="/"/>
    </Switch>
  </Router>
);
