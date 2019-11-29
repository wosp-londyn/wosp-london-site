import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import * as views from './Layouts';
import PostTemplate from './Templates/PostTemplate';

const RoutePaths = ({ data }) => {
    return (
        <Switch>
            <Route exact path="/" component={views.Home} />
            <Route exact path="/aktualnosci">
                <Redirect to="/aktualnosci/artykuly" />
            </Route>
            <Route exact path="/aktualnosci/artykuly" component={views.Posts} />
            {data.map(post => (
                <Route
                    key={post.id}
                    path={`/aktualnosci/artykuly/${post.slug}`}
                    render={props => <PostTemplate post={post} {...props} />}
                />
            ))}
            <Route path="/aktualnosci/podcasty" component={views.Podcasts} />
            <Route path="/aktualnosci/live" component={views.Live} />
            <Route path="/aktualnosci/galeria" component={views.Gallery} />

            <Route exact path="/informacje">
                <Redirect to="/informacje/program" />
            </Route>
            <Route path="/informacje/program" component={views.Program} />
            <Route path="/informacje/gwiazdy" component={views.Stars} />
            <Route path="/informacje/partnerzy" component={views.Partners} />

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
            <Route path="/wspieraj-nas/aukcje" component={views.Auctions} />

            <Route path="/kontakt" component={views.Contact} />
        </Switch>
    );
};

export default RoutePaths;
