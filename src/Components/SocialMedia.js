import React from 'react';
import styled from 'styled-components';
import instagram from '../Assets/Images/instagram.webp';
// import { Link } from 'react-router-dom';

const SocialBar = () => {
    return (
        <Wrapper>
            <Icon
                id="allegro"
                target="_blank"
                rel="noopener noreferrer"
                href="https://aukcje.wosp.org.pl/"
            >
                A
            </Icon>
            <Icon
                id="instagram"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/wosplondyn/"
            >
                <img src={instagram} alt="" />
            </Icon>
            <Icon
                id="facebook"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/wosplondyn"
            >
                f
            </Icon>
        </Wrapper>
    );
};

const Icon = styled.a`
    width: 30px;
    height: 30px;
    background: #000;

    border-radius: 10px;
    display: flex;
    justify-content: center;
    text-align: center;
    line-height: 160%;
    font-weight: bold;

    box-shadow: 2px 5px 8px -5px black;

    img {
        width: 100%;
        height: 100%;
    }

    &#allegro {
        background-color: #ff8140;
        color: white;
    }

    &#instagram {
        background-color: #ececec;
        color: #848484;
    }

    &#facebook {
        background-color: #429be9;
        color: white;
        font-family: 'Klavika';
    }
    :hover {
        color: rgba(0, 0, 0, 0.2) !important;
        text-decoration: none;
    }
`;

const Wrapper = styled.div`
    display: none;

    ${({ theme }) => theme.media.above.md} {
        width: 100px;

        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-content: center;

        margin: 15px auto;
    }
`;

export default SocialBar;
