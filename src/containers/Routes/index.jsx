import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../Home';
import NotFound from '../NotFound';

const Routes = () => (
    <Router>
        <div className="dark-bg">
            <Switch>
                <Route
                    exact path="/"
                    component={Home}
                />
                <Route component={NotFound} />
            </Switch>
        </div>
  </Router>
);

export default Routes;
