import React from 'react';
import styled from 'styled-components';
import { Col, Row } from 'react-bootstrap';

const Leitmotiv = () => {
    return (
        <StyledRow>
            <Col sm={5} md={5} lg={4} xl={3}>
                28. Finał WOŚP Londyn
            </Col>
            <Col sm={7} md={7} lg={6}>
                Gramy dla dzieci małych i bez focha
            </Col>
        </StyledRow>
    );
};

const StyledRow = styled(Row)`
    text-transform: uppercase;
    font-size: 15px;

    & div:nth-child(1) {
        font-weight: 700;
    }

    height: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;

    padding: 5px 0;

    ${({ theme }) => theme.media.above.sm} {
        flex-direction: row;
        text-align: left;
        padding: 10px 0;
        font-size: 14px;
    }

    ${({ theme }) => theme.media.above.md} {
        align-items: center;
        font-size: 13px;
    }
    ${({ theme }) => theme.media.above.lg} {
        font-size: 14px;
    }
`;

export default Leitmotiv;
