import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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
        fetch(`https://wosplondyn.uk/wp-json/wp/v2/posts?per_page=100`)
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
                        <Route
                            exact
                            path={`${preSlug}/artykuly`}
                            component={views.Posts}
                        />
                        <Route
                            path={`${preSlug}/aukcje`}
                            component={views.Auctions}
                        />
                        <Route
                            path={`${preSlug}/podcasty`}
                            component={views.Podcasts}
                        />
                        <Route
                            path={`${preSlug}/program`}
                            component={views.Program}
                        />
                        <Route
                            path={`${preSlug}/gwiazdy`}
                            component={views.Stars}
                        />
                        <Route
                            path={`${preSlug}/partnerzy`}
                            component={views.Partners}
                        />
                        <Route
                            path={`${preSlug}/live`}
                            component={views.Live}
                        />
                        <Route
                            path={`${preSlug}/zostan-wolontariuszem`}
                            component={views.Volunteer}
                        />
                        <Route
                            path={`${preSlug}/wplac-na-wosp`}
                            component={views.Support}
                        />
                        <Route
                            path={`${preSlug}/galeria`}
                            component={views.Gallery}
                        />
                        <Route
                            path={`${preSlug}/kontakt`}
                            component={views.Contact}
                        />

                        {data.map(post => (
                            <Route
                                key={post.id}
                                path={`${preSlug}/artykuly/${post.slug}`}
                                render={props => (
                                    <PostTemplate post={post} {...props} />
                                )}
                            />
                        ))}
                    </Switch>
                </MainLayout>
            </Router>
        );
    }
}

export default App;
