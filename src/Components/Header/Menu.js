import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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

    return (
        <>
            <NavDesktop>
                <Link className="App-link" to={`${preSlug}/`}>
                    Home
                </Link>

                <Link className="App-link" to={`${preSlug}/dunno`}>
                    Dunno
                </Link>

                <Link className="App-link" to={`${preSlug}/cheese`}>
                    Cheese
                </Link>

                <Link className="App-link" to={`${preSlug}/bootstrap-test`}>
                    Bootstrap-test
                </Link>
            </NavDesktop>
            <NavMobile>hamburger</NavMobile>
        </>
    );
};

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
