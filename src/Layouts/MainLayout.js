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

    return (
        <>
            <ThemeProvider theme={theme}>
                <>
                    <GlobalStyle />
                    <Header />
                    {location.pathname === `/` ? null : (
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
    overflow: hidden;
    /*padding: 10px;*/
    text-align: center;
`;

export default MainLayout;
