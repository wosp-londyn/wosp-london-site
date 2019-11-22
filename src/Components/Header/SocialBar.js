import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SocialBar = () => {
    return (
        <Wrapper>
            <Icon>fb</Icon>
            <Icon>ig</Icon>
            <Icon>yt</Icon>
        </Wrapper>
    );
};

const Icon = styled(Link)`
    width: 30px;
    height: 30px;
    background: ${({ theme }) => theme.color.black};
    color: rgba(${({ theme }) => theme.color.rgb.white}, 0.7);

    border-radius: 10px;

    display: flex;
    justify-content: center;
    text-align: center;
    line-height: 160%;

    border: solid 1px rgba(${({ theme }) => theme.color.rgb.white}, 0.7);

    :hover {
        color: rgba(${({ theme }) => theme.color.rgb.white}, 1);
        text-decoration: none;
    }
`;

const Wrapper = styled.div`
    width: 100px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: center;

    margin: 15px 0 15px auto;
`;

export default SocialBar;
