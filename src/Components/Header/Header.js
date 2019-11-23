import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Container, Navbar, Nav, Row, Col } from 'react-bootstrap';

import Menu from './Menu';
import SocialBar from './SocialBar';
import Brand from './Brand';

const Header = () => {
    return (
        <Wrapper as="header">
            <Row>
                <Container>
                    <Row>
                        <Col md={12}>
                            <SocialBar />
                        </Col>
                    </Row>
                </Container>
            </Row>

            <BottomRow>
                <Container>
                    <Navbar collapseOnSelect expand="md" variant="dark">
                        <Navbar.Brand as={Link} to="/">
                            <Brand />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto" />
                            <Menu />
                        </Navbar.Collapse>
                    </Navbar>
                </Container>
            </BottomRow>
        </Wrapper>
    );
};

const Wrapper = styled(Container)`
    background: ${({ theme }) => theme.color.bg1};
`;

const BottomRow = styled(Row)`
    background-color: ${({ theme }) => theme.color.navyBlue};
    height: 90px;
    font-size: 12px;
    font-weight: bold;

    display: flex;
    flex-direction: column;
    justify-content: center;

    ${Navbar.selector} {
        background-color: ${({ theme }) => theme.color.navyBlue};
    }

    ${({ theme }) => theme.media.above.sm} {
        height: 111px;
        font-size: 14px;
    }

    ${({ theme }) => theme.media.above.lg} {
        font-size: 16px;
    }
    ${({ theme }) => theme.media.above.xl} {
        height: 144px;
        font-size: 20px;
    }
`;

export default Header;
