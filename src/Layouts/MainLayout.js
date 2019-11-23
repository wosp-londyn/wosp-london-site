import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

// import 'assets/styles/fontsAtma.css';
// import 'assets/styles/fontsRoboto.css';

import GlobalStyle from '../Assets/Styles/GlobalStyle';
import theme from '../Assets/Styles/theme';
import { Header, Footer, Breadcrumbs } from '../Components';

const MainLayout = ({ children }) => (
    <>
        <ThemeProvider theme={theme}>
            <>
                <GlobalStyle />
                <Header />
                <Breadcrumbs />
                <StyledMain>{children}</StyledMain>
                <Footer />
            </>
        </ThemeProvider>
    </>
);

const StyledMain = styled.main`
    width: 100vw;
    min-height: 100vh;
    /*padding: 10px;*/
    text-align: center;
    /* background: ${({ theme }) => theme.color.bg1}; */
`;

export default MainLayout;
