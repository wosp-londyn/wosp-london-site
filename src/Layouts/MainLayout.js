import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { useLocation } from 'react-router-dom';

import '../Assets/Styles/fontsLato.css';
import '../Assets/Styles/fontsRaleway.css';

import GlobalStyle from '../Assets/Styles/GlobalStyle';
import theme from '../Assets/Styles/theme';
import { Header, Footer, Breadcrumbs } from '../Components';

const MainLayout = ({ children }) => {
    const getCurrentSection = path => {
        return path.split('/')[1];
    };

    const setColor = path => {
        const section = getCurrentSection(path);

        if (section === 'aktualnosci') {
            return theme.color.red;
        } if (section === 'informacje') {
            return theme.color.blue;
        } if (section === 'wspieraj-nas') {
            return theme.color.orange;
        } if (section === 'kontakt') {
            return theme.color.yellow;
        } 
            return 'none';
        
    };

    const location = useLocation();
    const sectionColor = setColor(location.pathname);

    return (
        <>
            <ThemeProvider theme={theme}>
                <>
                    <GlobalStyle />
                    <Header sectionColor={sectionColor} />
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
    width: 100%;
    min-height: 100vh;
    overflow: hidden;
    /*padding: 10px;*/
    text-align: center;
`;

export default MainLayout;
