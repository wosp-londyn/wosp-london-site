import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import DropdownMenu from './DropdownMenu';
import DropdownHeader from './DropdownHeader';

const NavDesktop = styled.nav`
    display: none;

    ${({ theme }) => theme.media.above.sm} {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        /* text-transform: uppercase; */
    }
`;

const NavMobile = styled.nav`
    color: white;
    ${({ theme }) => theme.media.above.sm} {
        display: none;
    }
`;

class Menu extends Component {
    constructor() {
        super();

        this.state = {
            newsMenu: false,
            infoMenu: false,
            supportMenu: false,
        };

        this.closeInfoMenu = this.closeInfoMenu.bind(this);
        this.closeNewsMenu = this.closeNewsMenu.bind(this);
        this.closeSupportMenu = this.closeSupportMenu.bind(this);
    }

    showNewsMenu(event) {
        event.preventDefault();

        this.setState({ newsMenu: true }, () => {
            document.addEventListener('click', this.closeNewsMenu);
        });
    }

    closeNewsMenu() {
        this.setState({ newsMenu: false }, () => {
            document.removeEventListener('click', this.closeNewsMenu);
        });
    }

    showInfoMenu(event) {
        event.preventDefault();

        this.setState({ infoMenu: true }, () => {
            document.addEventListener('click', this.closeInfoMenu);
        });
    }

    closeInfoMenu() {
        this.setState({ infoMenu: false }, () => {
            document.removeEventListener('click', this.closeInfoMenu);
        });
    }

    showSupportMenu(event) {
        event.preventDefault();

        this.setState({ supportMenu: true }, () => {
            document.addEventListener('click', this.closeSupportMenu);
        });
    }

    closeSupportMenu() {
        this.setState({ supportMenu: false }, () => {
            document.removeEventListener('click', this.closeSupportMenu);
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

        const { infoMenu, newsMenu, supportMenu } = this.state;

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
            <>
                <NavDesktop>
                    <Link className="App-link" to={`${preSlug}/`}>
                        Home
                    </Link>
                    <DropdownHeader
                        className="App-link"
                        onClick={this.showNewsMenu.bind(this)}
                    >
                        Aktualności
                        {newsMenu ? (
                            <DropdownMenu>
                                {newsDropdown.map(item => (
                                    <Link key={item.name} to={item.slug}>
                                        {item.name}
                                    </Link>
                                ))}
                            </DropdownMenu>
                        ) : null}
                    </DropdownHeader>
                    <DropdownHeader
                        className="App-link"
                        onClick={this.showInfoMenu.bind(this)}
                    >
                        Informacje
                        {infoMenu ? (
                            <DropdownMenu>
                                {infoDropdown.map(item => (
                                    <Link key={item.name} to={item.slug}>
                                        {item.name}
                                    </Link>
                                ))}
                            </DropdownMenu>
                        ) : null}
                    </DropdownHeader>
                    <DropdownHeader
                        className="App-link"
                        onClick={this.showSupportMenu.bind(this)}
                    >
                        Wesprzyj nas
                        {supportMenu ? (
                            <DropdownMenu>
                                {supportDropdown.map(item => (
                                    <Link key={item.name} to={item.slug}>
                                        {item.name}
                                    </Link>
                                ))}
                            </DropdownMenu>
                        ) : null}
                    </DropdownHeader>

                    <Link className="App-link" to={`${preSlug}/kontakt`}>
                        Kontakt
                    </Link>
                </NavDesktop>
                <NavMobile>hamburger</NavMobile>
            </>
        );
    }
}

export default Menu;
