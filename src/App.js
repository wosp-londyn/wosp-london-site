import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import MainLayout from './Layouts/MainLayout';

import { Logo, Dunno, Cheese } from './Components';

import './App.css';

function App() {
    const preSlug = '/wosp-london-site';

    return (
        <Router>
            <MainLayout>
                <header className="App-header">
                    <Switch>
                        <Route exact path={`${preSlug}/`} component={Logo} />
                        <Route path={`${preSlug}/dunno`} component={Dunno} />
                        <Route path={`${preSlug}/cheese`} component={Cheese} />
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
