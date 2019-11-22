import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';

import heart from '../../Assets/Images/logo131.png';

const Brand = () => {
    return (
        <>
            <MainRow>
                <Col xs={4} sm={4} md={5}>
                    <Img src={heart} />
                </Col>
                <RightCol
                    xs={{ offset: 3, span: 4 }}
                    sm={{ offset: 0, span: 8 }}
                    md={7}
                >
                    <Row>
                        <Col
                            xs={7}
                            sm={{ offset: 2, span: 6 }}
                            md={{ offset: 0, span: 12 }}
                        >
                            WOŚP
                        </Col>
                        <Col
                            xs={7}
                            sm={{ offset: 1, span: 3 }}
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
