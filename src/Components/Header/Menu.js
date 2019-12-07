import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { NavDropdown, Nav, Container } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Menu = () => {
    const newsDropdown = [
        { name: 'Artykuły', slug: '/artykuly' },
        { name: 'Galeria', slug: '/galeria' },
        { name: 'Na żywo', slug: '/live' },
    ];

    const infoDropdown = [
        { name: 'Program', slug: '/program' },
        { name: 'Gwiazdy', slug: '/gwiazdy' },
        { name: 'Sponsorzy', slug: '/sponsorzy' },
        { name: 'Partnerzy', slug: '/partnerzy' },
        { name: 'Media', slug: '/media' },
    ];

    const supportDropdown = [
        { name: 'Wpłać na WOŚP', slug: '/wplac-na-wosp' },
        { name: 'Aukcje', slug: '/aukcje' },
    ];

    return (
        <StyledNav className="navbar-nav navbar-right">
            <Nav.Link as={Link} to="/">
                <FontAwesomeIcon icon="home" size="lg" />
            </Nav.Link>
            <AktNavDropdown
                title="AKTUALNOŚCI"
                id="basic-nav-dropdown dropdown-menu-right"
            >
                {newsDropdown.map(item => (
                    <StyledNavDropdownItem
                        key={item.name}
                        as={Link}
                        to={`/aktualnosci${item.slug}`}
                    >
                        {item.name}
                    </StyledNavDropdownItem>
                ))}
            </AktNavDropdown>
            <InfNavDropdown title="INFORMACJE" id="basic-nav-dropdown">
                {infoDropdown.map(item => (
                    <StyledNavDropdownItem
                        key={item.name}
                        as={Link}
                        to={`/informacje${item.slug}`}
                    >
                        {item.name}
                    </StyledNavDropdownItem>
                ))}
            </InfNavDropdown>
            <WspNavDropdown title="WSPIERAJ NAS" id="basic-nav-dropdown">
                <StyledNavDropdownItem
                    as="a"
                    href="https://www.wosp.org.pl/final/dla-wolontariuszy"
                    rel="noreferrer noopener"
                    target="_blank"
                >
                    Zostań Wolontariuszem
                </StyledNavDropdownItem>
                {supportDropdown.map(item => (
                    <StyledNavDropdownItem
                        key={item.name}
                        as={Link}
                        to={`/wspieraj-nas${item.slug}`}
                    >
                        {item.name}
                    </StyledNavDropdownItem>
                ))}
            </WspNavDropdown>

            <StyledContainer>
                <Nav.Link as={Link} to="/kontakt">
                    KONTAKT
                </Nav.Link>
            </StyledContainer>
        </StyledNav>
    );
};

export default Menu;

const StyledNavDropdownItem = styled(NavDropdown.Item)`
    display: block;
    line-height: 2;
    color: #2a2a2a;
    font-size: 1rem;
    :hover {
        text-decoration: none;
    }
    ${({ theme }) => theme.media.below.md} {
        line-height: 3;
    }
`;

const StyledNav = styled(Nav)`
    text-align: center;
    :last-child {
        padding-right: 0;
    }

    a {
        border-bottom: 2px solid transparent;
    }

    a::after {
        display: none;
    }

    div > div {
        margin-top: 5px;
        width: 100%;
    }
    ${({ theme }) => theme.media.below.md} {
        line-height: 3;
    }
`;

const AktNavDropdown = styled(NavDropdown)`
    margin-left: 0.8rem;

    ${({ theme }) => theme.media.below.lg} {
        margin-left: 0px;
    }

    div {
        width: auto;
        min-width: 0;
    }

    div > a {
        text-align: center;
    }
    a:hover {
        color: ${({ theme }) => theme.color.red};
        border-bottom: 2px solid ${({ theme }) => theme.color.red};
    }
    div > a:hover {
        color: white;
        background: ${({ theme }) => theme.color.red};
        text-align: center;
    }
    div > a:active {
        filter: brightness(85%);
    }
`;

const InfNavDropdown = styled(NavDropdown)`
    margin-left: 0.8rem;

    ${({ theme }) => theme.media.below.lg} {
        margin-left: 0px;
    }
    div {
        width: auto;
        min-width: 0;
    }
    div > a {
        text-align: center;
    }
    a:hover {
        color: ${({ theme }) => theme.color.blue};
        border-bottom: 2px solid ${({ theme }) => theme.color.blue};
    }
    div > a:hover {
        color: white;
        background: ${({ theme }) => theme.color.blue};
    }
    div > a:active {
        filter: brightness(85%);
    }
`;
const WspNavDropdown = styled(NavDropdown)`
    margin-left: 0.8rem;
    ${({ theme }) => theme.media.below.lg} {
        margin-left: 0px;
    }
    div {
        width: auto;
        min-width: 0;
    }
    div > a {
        text-align: center;
    }
    a:hover {
        color: ${({ theme }) => theme.color.green};
        border-bottom: 2px solid ${({ theme }) => theme.color.green};
    }
    div > a:hover {
        color: white;
        background: ${({ theme }) => theme.color.green};
    }
    div > a:active {
        filter: brightness(85%);
    }
`;
const StyledContainer = styled(Container)`
    margin-left: 0.8rem;
    ${({ theme }) => theme.media.below.lg} {
        margin-left: 0px;
    }
    padding: 0;
    a:hover {
        border-bottom: 2px solid ${({ theme }) => theme.color.yellow};
    }
`;
