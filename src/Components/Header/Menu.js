import React from 'react';
import { Link } from 'react-router-dom';
import { NavDropdown, Nav } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Menu = () => {
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
        <Nav className="navbar-nav navbar-right">
            <Nav.Link as={Link} to="/">
                <FontAwesomeIcon icon="home" size="lg" />
            </Nav.Link>
            <NavDropdown title="Aktualności" id="basic-nav-dropdown">
                {newsDropdown.map(item => (
                    <NavDropdown.Item
                        key={item.name}
                        as={Link}
                        to={`/aktualnosci${item.slug}`}
                    >
                        {item.name}
                    </NavDropdown.Item>
                ))}
            </NavDropdown>
            <NavDropdown title="Informacje" id="basic-nav-dropdown">
                {infoDropdown.map(item => (
                    <NavDropdown.Item
                        key={item.name}
                        as={Link}
                        to={`/informacje${item.slug}`}
                    >
                        {item.name}
                    </NavDropdown.Item>
                ))}
            </NavDropdown>
            <NavDropdown title="Wspieraj nas" id="basic-nav-dropdown">
                {supportDropdown.map(item => (
                    <NavDropdown.Item
                        key={item.name}
                        as={Link}
                        to={`/wspieraj-nas${item.slug}`}
                    >
                        {item.name}
                    </NavDropdown.Item>
                ))}
            </NavDropdown>

            <Nav.Link as={Link} to="/kontakt">
                Kontakt
            </Nav.Link>
        </Nav>
    );
};

export default Menu;
