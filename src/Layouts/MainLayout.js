import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

// import 'assets/styles/fontsAtma.css';
// import 'assets/styles/fontsRoboto.css';

import GlobalStyle from '../Assets/Styles/GlobalStyle';
import theme from '../Assets/Styles/theme';
// import { Header, Footer, Menu } from 'components';

const MainLayout = ({ children }) => (
    <>
        <ThemeProvider theme={theme}>
            <>
                <GlobalStyle />
                <StyledMain>{children}</StyledMain>
            </>
        </ThemeProvider>
    </>
);

const StyledMain = styled.main`
    width: 100%;
    text-align: center;
`;

export default MainLayout;
