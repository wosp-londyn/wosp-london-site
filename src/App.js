import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

import MainLayout from './Layouts/MainLayout';
import * as views from './Layouts';
import PostTemplate from './Templates/PostTemplate';

library.add(faHome);

class App extends Component {
    constructor(props) {
        super(props);

        this.state = { data: [] };
        this.fetchPostData = this.fetchPostData.bind(this);
    }

    componentDidMount() {
        this.fetchPostData();
    }

    fetchPostData() {
        fetch(`https://wosplondyn.uk/wp-json/wp/v2/posts?_embed&per_page=100`)
            .then(response => response.json())
            .then(responseJSON => {
                this.setState({
                    data: responseJSON,
                });
            });
    }

    render() {
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

        const { data } = this.state;

        return (
            <Router>
                <MainLayout>
                    <Switch>
                        <Route
                            exact
                            path={`${preSlug}/`}
                            component={views.Home}
                        />
                        <Route exact path={`${preSlug}/aktualnosci`}>
                            <Redirect to="/aktualnosci/artykuly" />
                        </Route>
                        <Route
                            exact
                            path={`${preSlug}/aktualnosci/artykuly`}
                            component={views.Posts}
                        />
                        {data.map(post => (
                            <Route
                                key={post.id}
                                path={`${preSlug}/aktualnosci/artykuly/${post.slug}`}
                                render={props => (
                                    <PostTemplate post={post} {...props} />
                                )}
                            />
                        ))}
                        <Route
                            path={`${preSlug}/aktualnosci/podcasty`}
                            component={views.Podcasts}
                        />
                        <Route
                            path={`${preSlug}/aktualnosci/live`}
                            component={views.Live}
                        />
                        <Route
                            path={`${preSlug}/aktualnosci/galeria`}
                            component={views.Gallery}
                        />

                        <Route exact path={`${preSlug}/informacje`}>
                            <Redirect to="/informacje/program" />
                        </Route>
                        <Route
                            path={`${preSlug}/informacje/program`}
                            component={views.Program}
                        />
                        <Route
                            path={`${preSlug}/informacje/gwiazdy`}
                            component={views.Stars}
                        />
                        <Route
                            path={`${preSlug}/informacje/partnerzy`}
                            component={views.Partners}
                        />

                        <Route exact path={`${preSlug}/wspieraj-nas`}>
                            <Redirect to="/wspieraj-nas/zostan-wolontariuszem" />
                        </Route>
                        <Route
                            path={`${preSlug}/wspieraj-nas/zostan-wolontariuszem`}
                            component={views.Volunteer}
                        />
                        <Route
                            path={`${preSlug}/wspieraj-nas/wplac-na-wosp`}
                            component={views.Support}
                        />
                        <Route
                            path={`${preSlug}/wspieraj-nas/aukcje`}
                            component={views.Auctions}
                        />

                        <Route
                            path={`${preSlug}/kontakt`}
                            component={views.Contact}
                        />
                    </Switch>
                </MainLayout>
            </Router>
        );
    }
}

export default App;
