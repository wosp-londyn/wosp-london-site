import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Logo, Dunno, Cheese } from './Components';

import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <Switch>
                        <Route exact path="/" component={Logo} />
                        <Route exact path="/dunno" component={Dunno} />
                        <Route exact path="/cheese" component={Cheese} />
                    </Switch>
                    <p>
                        <ul>
                            <li>
                                <Link className="App-link" to="/">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link className="App-link" to="/dunno">
                                    Dunno
                                </Link>
                            </li>
                            <li>
                                <Link className="App-link" to="/cheese">
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
            </div>
        </Router>
    );
}

export default App;
