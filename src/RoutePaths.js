import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import * as views from './Layouts';
import PostTemplate from './Templates/PostTemplate';

export default class RoutePaths extends Component {
    constructor(props) {
        super(props);

        this.state = { data: [], isLoading: true };
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
                    isLoading: false,
                });
            });
    }

    render() {
        const { data } = this.state;
        console.log(data);

        return (
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
                        exact
                        path={`/aktualnosci/artykuly/${post.slug}`}
                        render={props => (
                            <PostTemplate post={post} {...props} />
                        )}
                    />
                ))}
                <Route
                    exact
                    path="/aktualnosci/podcasty"
                    component={views.Podcasts}
                />
                <Route exact path="/aktualnosci/live" component={views.Live} />
                <Route
                    exact
                    path="/aktualnosci/galeria"
                    component={views.Gallery}
                />

                <Route exact path="/informacje">
                    <Redirect to="/informacje/program" />
                </Route>
                <Route
                    exact
                    path="/informacje/program"
                    component={views.Program}
                />
                <Route
                    exact
                    path="/informacje/gwiazdy"
                    component={views.Stars}
                />
                <Route
                    exact
                    path="/informacje/sponsorzy"
                    component={views.Sponsors}
                />
                <Route
                    exact
                    path="/informacje/partnerzy"
                    component={views.Partners}
                />
                <Route exact path="/informacje/media" component={views.Media} />

                <Route exact path="/wspieraj-nas">
                    <Redirect to="/wspieraj-nas/zostan-wolontariuszem" />
                </Route>
                <Route
                    exact
                    path="/wspieraj-nas/wplac-na-wosp"
                    component={views.Support}
                />
                <Route
                    exact
                    path="/wspieraj-nas/aukcje"
                    component={views.Auctions}
                />

                <Route exact path="/kontakt" component={views.Contact} />
                <Route exact path="/404" component={views.PageNotFound} />
                {this.state.isLoading ? (
                    <Route component={views.Loading} />
                ) : (
                    <Route>
                        <Redirect to="/404" />
                    </Route>
                )}
            </Switch>
        );
    }
}
