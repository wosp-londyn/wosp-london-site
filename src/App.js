import React, { PureComponent } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome } from '@fortawesome/free-solid-svg-icons';

import 'bootstrap/dist/css/bootstrap.min.css';

import ReactGA from 'react-ga';
import MainLayout from './Layouts/MainLayout';
import ScrollToTop from './Utils/ScrollToTop';
import RoutePaths from './RoutePaths';


ReactGA.initialize('UA-156444412-1');
ReactGA.pageview(window.location.pathname + window.location.search);

library.add(faHome);

class App extends PureComponent {
    render() {
        return (
            <>
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
