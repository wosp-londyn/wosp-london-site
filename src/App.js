import React, { PureComponent } from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome } from '@fortawesome/free-solid-svg-icons';

import 'bootstrap/dist/css/bootstrap.min.css';

import MainLayout from './Layouts/MainLayout';
import ScrollToTop from './Utils/ScrollToTop';
import RoutePaths from './RoutePaths';

library.add(faHome);

class App extends PureComponent {
    render() {
        return (
            <>
                <Helmet>
                    <title>WOŚP Londyn</title>
                </Helmet>
                <Router>
                    <ScrollToTop>
                        <MainLayout>
                            <RoutePaths />
                        </MainLayout>
                    </ScrollToTop>
                </Router>
            </>
        );
    }
}

export default App;
