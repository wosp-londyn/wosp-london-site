import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Container, Navbar, Nav, Row, Col } from 'react-bootstrap';

import Menu from './Menu';
import SocialMedia from '../SocialMedia';
import Leitmotiv from './Leitmotiv';
import Brand from './Brand';

const Header = ({ sectionColor }) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <>
            <Container fluid as="header">
                <Row>
                    <Container>
                        <Row>
                            <Col md={10}>
                                <Leitmotiv />
                            </Col>
                            <Col md={2}>
                                <SocialMedia />
                            </Col>
                        </Row>
                    </Container>
                </Row>

                <BottomRow>
                    <Container>
                        <Navbar expanded={expanded} expand="lg" variant="dark">
                            <Navbar.Brand as={Link} to="/">
                                <Brand />
                            </Navbar.Brand>
                            <Navbar.Toggle
                                onClick={() =>
                                    setExpanded(expanded ? false : 'expanded')
                                }
                                aria-controls="basic-navbar-nav"
                            />
                            <StyledNavbarCollapse id="basic-navbar-nav">
                                <Nav className="mr-auto" />
                                <Menu
                                    sectionColor={sectionColor}
                                    setExpanded={setExpanded}
                                />
                            </StyledNavbarCollapse>
                        </Navbar>
                    </Container>
                </BottomRow>
            </Container>
            <ColorBar sectionColor={sectionColor} />
        </>
    );
};

const StyledNavbarCollapse = styled(Navbar.Collapse)`
    padding-top: 10px;
    padding-bottom: 10px;

    ${({ theme }) => theme.media.above.lg} {
        padding-top: 0;
        padding-bottom: 0;
    }
`;

const BottomRow = styled(Row)`
    background-color: ${({ theme }) => theme.color.navyBlue};
    min-height: 90px;
    font-weight: 400;

    display: flex;
    flex-direction: column;
    justify-content: center;

    & > div > nav {
        background-color: ${({ theme }) => theme.color.navyBlue};
        padding: 8px 16px;

        ${({ theme }) => theme.media.above.sm} {
            padding: 8px 0;
        }
    }

    font-size: 16px;
    text-align: center;

    ${({ theme }) => theme.media.above.sm} {
        min-height: 111px;
        font-size: 18px;
        text-align: center;
    }

    ${({ theme }) => theme.media.above.lg} {
        font-size: 16px;
    }
    ${({ theme }) => theme.media.above.xl} {
        min-height: 144px;
        font-size: 17px;
    }
`;

const ColorBar = styled.div`
    width: 100%;
    height: 10px;
    background: ${({ sectionColor }) => sectionColor.dark};
    display: ${({ sectionColor }) => (sectionColor.dark ? 'inherit' : 'none')};
`;
export default Header;
