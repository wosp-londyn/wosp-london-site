import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { NavDropdown, Nav } from 'react-bootstrap';
import { Container } from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Menu = () => {
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

    const newsDropdown = [
        { name: 'Artykuły', slug: '/artykuly' },
        { name: 'Podcasty', slug: '/podcasty' },
        { name: 'Na żywo', slug: '/live' },
        { name: 'Galeria', slug: '/galeria' },
    ];

    const infoDropdown = [
        { name: 'Program', slug: '/program' },
        { name: 'Gwiazdy', slug: '/gwiazdy' },
        { name: 'Sponsorzy', slug: '/sponsorzy' },
        { name: 'Partnerzy', slug: '/partnerzy' },
        { name: 'Media', slug: '/media' },
    ];

    const supportDropdown = [
        { name: 'Zostań Wolontariuszem', slug: '/zostan-wolontariuszem' },
        { name: 'Wpłać na WOŚP', slug: '/wplac-na-wosp' },
        { name: 'Aukcje', slug: '/aukcje' },
    ];

    return (
        <StyledNav className="navbar-nav navbar-right">
            <Nav.Link as={Link} to={`${preSlug}/`}>
                <FontAwesomeIcon icon="home" size="lg" />
            </Nav.Link>
            <AktNavDropdown title="AKTUALNOŚCI" id="basic-nav-dropdown">
                {newsDropdown.map(item => (
                    <NavDropdown.Item
                        key={item.name}
                        as={Link}
                        to={`/aktualnosci${item.slug}`}
                    >
                        {item.name}
                    </NavDropdown.Item>
                ))}
            </AktNavDropdown>
            <InfNavDropdown title="INFORMACJE" id="basic-nav-dropdown">
                {infoDropdown.map(item => (
                    <NavDropdown.Item
                        key={item.name}
                        as={Link}
                        to={`/informacje${item.slug}`}
                    >
                        {item.name}
                    </NavDropdown.Item>
                ))}
            </InfNavDropdown>
            <WspNavDropdown title="WSPIERAJ NAS" id="basic-nav-dropdown">
                {supportDropdown.map(item => (
                    <NavDropdown.Item
                        key={item.name}
                        as={Link}
                        to={`/wspieraj-nas${item.slug}`}
                    >
                        {item.name}
                    </NavDropdown.Item>
                ))}
            </WspNavDropdown>

            <StyledContainer>
                <Nav.Link as={Link} to={`${preSlug}/kontakt`}>
                    KONTAKT
                </Nav.Link>
            </StyledContainer>

        </StyledNav>
    );
};

export default Menu;

const StyledNav = styled(Nav)`

    div{
        padding-right: 0.5rem;
        padding-left: 0.5rem;
    }

    div:last-child{
        padding-right: 0;
    }

    a{
        border-bottom: 2px solid transparent;
    }

    a::after{
        display: none;
    }

    span:hover{
        color: #DE323D;
        border-bottom: 2px solid #DE323D;
    }

`

const AktNavDropdown = styled(NavDropdown)`
    a:hover{
        color: #DE323D;
        border-bottom: 2px solid #DE323D;
    }
`

const InfNavDropdown = styled(NavDropdown)`
    a:hover{
        border-bottom: 2px solid #32B2E8;
    }
`
const WspNavDropdown = styled(NavDropdown)`
    a:hover{
        border-bottom: 2px solid #AACD4B;
    }
`
const StyledContainer = styled(Container)`
    padding: 0;

    a:hover{
        border-bottom: 2px solid #FAB400;
    }
`
