import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SocialBar = () => {
    return (
        <Wrapper>
            <Icon id="allegro">A</Icon>
            <Icon id="instagram">ig</Icon>
            <Icon id="facebook">f</Icon>
        </Wrapper>
    );
};

const Icon = styled(Link)`
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

        margin: 15px 0 15px auto;
    }
`;

export default SocialBar;
