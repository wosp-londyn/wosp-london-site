import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import MainLayout from './Layouts/MainLayout';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Logo, Dunno, Cheese, BootstrapTest } from './Components';

import './App.css';

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
                <header className="App-header">
                    <Switch>
                        <Route exact path={`${preSlug}/`} component={Logo} />
                        <Route path={`${preSlug}/dunno`} component={Dunno} />
                        <Route path={`${preSlug}/cheese`} component={Cheese} />
                        <Route
                            path={`${preSlug}/bootstrap-test`}
                            component={BootstrapTest}
                        />
                    </Switch>
                    <p>
                        <ul>
                            <li>
                                <Link className="App-link" to={`${preSlug}/`}>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="App-link"
                                    to={`${preSlug}/dunno`}
                                >
                                    Dunno
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="App-link"
                                    to={`${preSlug}/cheese`}
                                >
                                    Cheese
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="App-link"
                                    to={`${preSlug}/bootstrap-test`}
                                >
                                    Bootstrap-test
                                </Link>
                            </li>
                        </ul>
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
            </MainLayout>
        </Router>
    );
}

export default App;
