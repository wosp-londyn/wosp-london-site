import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { useLocation } from 'react-router-dom';

import '../Assets/Styles/fontsLato.css';
import '../Assets/Styles/fontsRaleway.css';

import { Container, Row, Col } from 'react-bootstrap';
import GlobalStyle from '../Assets/Styles/GlobalStyle';
import theme from '../Assets/Styles/theme';
import { Header, Footer, Breadcrumbs, Sidebar } from '../Components';
import lightenColor from '../Utils/lightenColor';


const MainLayout = ({ children }) => {
    const getCurrentSection = path => {
        return path.split('/')[1];
    };

    const setColor = path => {
        const section = getCurrentSection(path);

        if (section === 'aktualnosci') {
            return {
                dark: theme.color.red,
                light: lightenColor(theme.color.red, 20),
            };
        }
        if (section === 'informacje') {
            return {
                dark: theme.color.blue,
                light: lightenColor(theme.color.blue, 20),
            };
        }
        if (section === 'wspieraj-nas') {
            return {
                dark: theme.color.green,
                light: lightenColor(theme.color.green, 10),
            };
        }
        if (section === 'kontakt') {
            return {
                dark: theme.color.yellow,
                light: lightenColor(theme.color.yellow, 10),
            };
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
                    {location.pathname === `/` ||
                    location.pathname === `/404` ? null : (
                        <Breadcrumbs sectionColor={sectionColor} /> // Show breadcrumbs everywhere but homepage
                    )}

                    {location.pathname === `/` ||
                    location.pathname === `/404` ? (
                        <StyledMain>{children}</StyledMain>
                    ) : (
                        <Container>
                            <Row>
                                <Col xs={12} lg={9}>
                                    <StyledMain>{children}</StyledMain>
                                </Col>
                                <Col lg={3}>
                                    <Sidebar />
                                </Col>
                            </Row>
                        </Container>
                    )}
                    <Sidebar />
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
