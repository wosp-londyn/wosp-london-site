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
import ScrollToTop from './Utils/ScrollToTop';

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
        const { data } = this.state;

        return (
            <Router>
                <ScrollToTop>
                    <MainLayout>
                        <Switch>
                            <Route exact path="/" component={views.Home} />
                            <Route exact path="/aktualnosci">
                                <Redirect to="/aktualnosci/artykuly" />
                            </Route>
                            <Route
                                exact
                                path="/aktualnosci/artykuly"
                                component={views.Posts}
                            />
                            {data.map(post => (
                                <Route
                                    key={post.id}
                                    path={`/aktualnosci/artykuly/${post.slug}`}
                                    render={props => (
                                        <PostTemplate post={post} {...props} />
                                    )}
                                />
                            ))}
                            <Route
                                path="/aktualnosci/podcasty"
                                component={views.Podcasts}
                            />
                            <Route
                                path="/aktualnosci/live"
                                component={views.Live}
                            />
                            <Route
                                path="/aktualnosci/galeria"
                                component={views.Gallery}
                            />

                            <Route exact path="/informacje">
                                <Redirect to="/informacje/program" />
                            </Route>
                            <Route
                                path="/informacje/program"
                                component={views.Program}
                            />
                            <Route
                                path="/informacje/gwiazdy"
                                component={views.Stars}
                            />
                            <Route
                                path="/informacje/partnerzy"
                                component={views.Partners}
                            />

                            <Route exact path="/wspieraj-nas">
                                <Redirect to="/wspieraj-nas/zostan-wolontariuszem" />
                            </Route>
                            <Route
                                path="/wspieraj-nas/zostan-wolontariuszem"
                                component={views.Volunteer}
                            />
                            <Route
                                path="/wspieraj-nas/wplac-na-wosp"
                                component={views.Support}
                            />
                            <Route
                                path="/wspieraj-nas/aukcje"
                                component={views.Auctions}
                            />

                            <Route path="/kontakt" component={views.Contact} />
                        </Switch>
                    </MainLayout>
                </ScrollToTop>
            </Router>
        );
    }
}

export default App;
