import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';

import heart from '../../Assets/Images/logo131.png';

const Brand = () => {
    return (
        <>
            <MainRow>
                <Col xs={5} sm={6} md={6}>
                    <Img src={heart} />
                </Col>
                <RightCol
                    xs={{ offset: 3, span: 4 }}
                    sm={{ offset: 0, span: 6 }}
                    md={6}
                >
                    <Row>
                        <Col
                            xs={7}
                            sm={{ offset: 0, span: 5 }}
                            md={{ offset: 0, span: 12 }}
                        >
                            WOŚP
                        </Col>
                        <Col
                            xs={7}
                            sm={{ offset: 4, span: 3 }}
                            md={{ offset: 0, span: 12 }}
                        >
                            LONDYN
                        </Col>
                    </Row>
                </RightCol>
            </MainRow>
        </>
    );
};

const Img = styled.img`
    width: 84px;

    ${({ theme }) => theme.media.above.sm} {
        width: 106px;
    }

    ${({ theme }) => theme.media.above.md} {
        width: 85px;
    }

    ${({ theme }) => theme.media.above.lg} {
        width: 110px;
    }

    ${({ theme }) => theme.media.above.xl} {
        width: 131px;
    }
`;

const RightCol = styled(Col)`
    display: flex;
    flex-direction: column;
    justify-content: center;

    border-left: 1px white solid;

    font-size: 21px;
    ${({ theme }) => theme.media.above.sm} {
        width: 106px;
        font-size: 30px;
    }

    ${({ theme }) => theme.media.above.md} {
        width: 85px;
        font-size: 22px;
    }

    ${({ theme }) => theme.media.above.lg} {
        width: 110px;
        font-size: 29px;
    }

    ${({ theme }) => theme.media.above.xl} {
        width: 131px;
        font-size: 35px;
    }
`;

const MainRow = styled(Row)`
    ${({ theme }) => theme.media.below.sm} {
        width: 150px;
    }
`;

export default Brand;
