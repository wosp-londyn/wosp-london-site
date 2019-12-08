import React from 'react';
import styled from 'styled-components';

const Loading = () => {
    return (
        <div>
            <H3>Trwa ładowanie treści...</H3>
        </div>
    );
};

const H3 = styled.h3`
    padding-top: 15px;
    color: #5d5d5d;
    font-weight: 400;
    font-size: 18px;
`;
export default Loading;
