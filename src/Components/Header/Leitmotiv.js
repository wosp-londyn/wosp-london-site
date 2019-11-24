import React from 'react';
import styled from 'styled-components';
import { Col, Row } from 'react-bootstrap';

const Leitmotiv = () => {
    return (
        <StyledRow>
            <Col sm={12} md={12} lg={12} xl={12}>
                <div>28. Finał WOŚP Londyn</div>
                <div>Gramy dla dzieci małych i bez focha</div>
            </Col>
        </StyledRow>
    );
};

const StyledRow = styled(Row)`
    text-transform: uppercase;
    font-size: 14px;


    & div:nth-child(1) {
        font-weight: 700;
        display: inline-block;
        padding-right: 20px;
    }
    & div:nth-child(2) {
        font-weight: 500;
        display: inline-block;
    }

    height: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;

    padding: 5px 0;

    ${({ theme }) => theme.media.above.sm} {
        flex-direction: row;
        text-align: center;
        padding: 10px 0;
        padding-left: 0;
        font-size: 14px;
    }

    ${({ theme }) => theme.media.above.md} {
        align-items: left;
        text-align: left;
        font-size: 16px;
        margin-top: 10px;
        margin-bottom: 10px;
    }
    ${({ theme }) => theme.media.above.lg} {
        font-size: 16px;
    }
`;

export default Leitmotiv;
