import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome } from '@fortawesome/free-solid-svg-icons';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

import MainLayout from './Layouts/MainLayout';
import ScrollToTop from './Utils/ScrollToTop';
import RoutePaths from './RoutePaths';

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
            <>
                <Helmet>
                    <title>WOŚP Londyn</title>
                </Helmet>
                <Router>
                    <ScrollToTop>
                        <MainLayout>
                            <RoutePaths data={data} />
                        </MainLayout>
                    </ScrollToTop>
                </Router>
            </>
        );
    }
}

export default App;
