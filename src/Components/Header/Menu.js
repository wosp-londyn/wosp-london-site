import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import DropdownMenu from './DropdownMenu';
import DropdownHeader from './DropdownHeader';

class Menu extends Component {
    constructor() {
        super();

        this.state = {
            showMenu: false,
        };

        this.closeMenu = this.closeMenu.bind(this);
    }

    showMenu(event) {
        event.preventDefault();

        this.setState(
            {
                showMenu: true,
            },
            () => {
                document.addEventListener('click', this.closeMenu);
            }
        );
    }

    closeMenu() {
        this.setState({ showMenu: false }, () => {
            document.removeEventListener('click', this.closeMenu);
        });
    }

    render() {
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

        const { showMenu } = this.state;

        const newsDropdown = [
            { name: 'Artykuły', slug: '/artykuly' },
            { name: 'Aukcje', slug: '/aukcje' },
            { name: 'Podcasty', slug: '/podcasty' },
        ];

        // const infoDropdown = [
        //     { name: 'Program', slug: '/program' },
        //     { name: 'Gwiazdy', slug: '/gwiazdy' },
        // ];

        // const supportDropdown = [
        //     { name: 'Sponsorzy', slug: '/sponsorzy' },
        //     { name: 'Partnerzy', slug: '/partnerzy' },
        //     { name: 'Media', slug: '/media' },
        // ];

        return (
            <>
                <NavDesktop>
                    <Link className="App-link" to={`${preSlug}/`}>
                        Home
                    </Link>
                    <DropdownHeader
                        className="App-link"
                        onClick={this.showMenu.bind(this)}
                    >
                        Aktualności
                    </DropdownHeader>
                    {showMenu ? (
                        <DropdownMenu>
                            {newsDropdown.map(item => (
                                <Link key={item.name} to={item.slug}>
                                    {item.name}
                                </Link>
                            ))}
                        </DropdownMenu>
                    ) : null}

                    <Link className="App-link" to={`${preSlug}/kontakt`}>
                        Kontakt
                    </Link>
                </NavDesktop>
                <NavMobile>hamburger</NavMobile>
            </>
        );
    }
}

const NavDesktop = styled.nav`
    display: none;

    ${({ theme }) => theme.media.above.sm} {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
    }
`;

const NavMobile = styled.nav`
    color: white;
    ${({ theme }) => theme.media.above.sm} {
        display: none;
    }
`;

export default Menu;
