import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '../Home';
import ComingSoon from '../ComingSoon';
import NotFound from '../NotFound';

import { 
    CSSTransition, 
    TransitionGroup 
} from 'react-transition-group';

const supportsHistory = 'pushState' in window.history;

const Routes = () => (
    <Router forceRefresh={!supportsHistory}>
        <Route
            render={({ location }) => {
                const currentKey = location.pathname.split('/')[1] || '/'
                const timeout = { enter: 500, exit: 300 }
                return (
                    <TransitionGroup component="main" className="page-main">
                        <CSSTransition key={currentKey} timeout={timeout} classNames="fade" appear>
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
                        </CSSTransition>
                    </TransitionGroup>
                );
            }}
        />
    </Router>
);

export default Routes;