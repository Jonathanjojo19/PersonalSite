import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '../Home';
import ComingSoon from '../ComingSoon';
import NotFound from '../NotFound';

const supportsHistory = 'pushState' in window.history;

const Routes = () => (
    <Router forceRefresh={!supportsHistory}>
        <Route
            render={({ location }) => {
                return (
                    <section className="page-main-inner">
                        <Route
                            location={location}
                            render={() => (
                                <Switch>
                                    <Route
                                        exact path="/"
                                        component={Home}
                                    />
                                    <Route  
                                        exact path="/comingsoon"
                                        component={ComingSoon}
                                    />
                                    <Route component={NotFound} />
                                </Switch>
                            )}
                        />
                    </section>
                );
            }}
        />
    </Router>
);

export default Routes;