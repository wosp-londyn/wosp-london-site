import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainLayout from './Layouts/MainLayout';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Logo, Dunno, Cheese, BootstrapTest } from './Components';

import './style.css';

function App() {
    let preSlug = '';
    if (
        // If localhost - dont use prefix
        window.location.hostname === 'localhost' ||
        window.location.hostname === '127.0.0.1'
    ) {
        preSlug = '';
    } else if (
        // Prefix if hosted on github
        window.location.hostname === 'neology92.github.io'
    ) {
        preSlug = '/wosp-london-site';
    }

    return (
        <Router>
            <MainLayout>
                <Switch>
                    <Route exact path={`${preSlug}/`} component={Logo} />
                    <Route path={`${preSlug}/dunno`} component={Dunno} />
                    <Route path={`${preSlug}/cheese`} component={Cheese} />
                    <Route
                        path={`${preSlug}/bootstrap-test`}
                        component={BootstrapTest}
                    />
                </Switch>
            </MainLayout>
        </Router>
    );
}

export default App;
