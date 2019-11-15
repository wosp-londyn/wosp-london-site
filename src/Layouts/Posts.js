import React from 'react';
import styled from 'styled-components';
import { Cheese } from '../Components';

const Posts = () => {
    return (
        <Container>
            Artykuły
            <Cheese />
        </Container>
    );
};

const Container = styled.div`
    background: ${({ theme }) => theme.color.black};
    color: ${({ theme }) => theme.color.white};
`;

export default Posts;
