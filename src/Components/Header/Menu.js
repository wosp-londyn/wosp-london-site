import React from 'react';
import { Link } from 'react-router-dom';
import { NavDropdown, Nav } from 'react-bootstrap';

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
        { name: 'Aukcje', slug: '/aukcje' },
        { name: 'Podcasty', slug: '/podcasty' },
    ];

    const infoDropdown = [
        { name: 'Program', slug: '/program' },
        { name: 'Gwiazdy', slug: '/gwiazdy' },
        { name: 'Partnerzy', slug: '/partnerzy' },
    ];

    const supportDropdown = [
        { name: 'Zostań Wolontariuszem', slug: '/zostan-wolontariuszem' },
        { name: 'Wpłać na WOŚP', slug: '/wplac-na-wosp' },
    ];

    return (
        <Nav className="navbar-nav navbar-right">
            <Nav.Link as={Link} to={`${preSlug}/`}>
                <FontAwesomeIcon icon="home" size="lg" />
            </Nav.Link>
            <NavDropdown title="Aktualności" id="basic-nav-dropdown">
                {newsDropdown.map(item => (
                    <NavDropdown.Item key={item.name} as={Link} to={item.slug}>
                        {item.name}
                    </NavDropdown.Item>
                ))}
            </NavDropdown>
            <NavDropdown title="Informacje" id="basic-nav-dropdown">
                {infoDropdown.map(item => (
                    <NavDropdown.Item key={item.name} as={Link} to={item.slug}>
                        {item.name}
                    </NavDropdown.Item>
                ))}
            </NavDropdown>
            <NavDropdown title="Wesprzyj nas" id="basic-nav-dropdown">
                {supportDropdown.map(item => (
                    <NavDropdown.Item key={item.name} as={Link} to={item.slug}>
                        {item.name}
                    </NavDropdown.Item>
                ))}
            </NavDropdown>

            <Nav.Link as={Link} to={`${preSlug}/kontakt`}>
                Kontakt
            </Nav.Link>
        </Nav>
    );
};

export default Menu;
