import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { useLocation } from 'react-router-dom';

import '../Assets/Styles/fontsLato.css';
import '../Assets/Styles/fontsRaleway.css';

import GlobalStyle from '../Assets/Styles/GlobalStyle';
import theme from '../Assets/Styles/theme';
import { Header, Footer, Breadcrumbs } from '../Components';

const MainLayout = ({ children }) => {
    const location = useLocation();

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

    return (
        <>
            <ThemeProvider theme={theme}>
                <>
                    <GlobalStyle />
                    <Header />
                    {location.pathname === `${preSlug}/` ? null : (
                        <Breadcrumbs /> // Show breadcrumbs everywhere but homepage
                    )}
                    <StyledMain>{children}</StyledMain>
                    <Footer />
                </>
            </ThemeProvider>
        </>
    );
};
const StyledMain = styled.main`
    width: 100vw;
    min-height: 100vh;
    /*padding: 10px;*/
    text-align: center;
`;

export default MainLayout;
