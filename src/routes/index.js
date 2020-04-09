import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Dashboard from '../containers/Dashboard';
import IntegrationScreen from '../containers/IntegrationScreen';
import ReportsScreen from '../containers/ReportsScreen';

export const routes = (
  <Switch>
    <Route exact path="/"><Dashboard /></Route>
    <Route path="/integration"><IntegrationScreen /></Route>
    <Route path="/reports"><ReportsScreen /></Route>
    <Redirect from="*" to="/"/>
  </Switch>
);
