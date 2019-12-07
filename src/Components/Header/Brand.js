import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';

import logo from '../../Assets/Images/logo-512.png';

const Brand = () => {
    return (
        <>
            <MainRow>
                <LogoCol xs={5} sm={6} md={6} >
                    <Img src={logo} />
                </LogoCol>
                <RightCol
                    xs={{ offset: 3, span: 4 }}
                    sm={{ offset: 0, span: 6 }}
                    md={6}
                >
                    <Row>
                        <Col
                            xs={12}
                        >
                            <h1>WOŚP</h1>
                        </Col>
                    </Row>

                    <Row>
                        <Col
                            xs={12}
                        >
                            <h1>LONDYN</h1>
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
    font-weight: bold;
    text-align: left;

    border-left: 1px white solid;

    h1{
        font-size: 21px;
        font-weight: 700;
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
    }

`;

const MainRow = styled(Row)`
    ${({ theme }) => theme.media.below.sm} {
        width: 150px;
    }
`;

const LogoCol = styled(Col)`
    padding-right: 10px;
    padding-left: 0;

    ${({ theme }) => theme.media.above.sm} {
        padding-left: 15px;
    }
`;
export default Brand;
