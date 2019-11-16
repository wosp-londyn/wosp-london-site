import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';

import Menu from './Menu';
import SocialBar from '../SocialBar';

const Header = () => {
    return (
        <Wrapper>
            <Container>
                <SocialBar />
                <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                    <Navbar.Brand as={Link} to="/">
                        WOŚP
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto" />
                        <Menu />
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </Wrapper>
    );
};

const Wrapper = styled.header`
    background: ${({ theme }) => theme.color.bg1};
`;

export default Header;
