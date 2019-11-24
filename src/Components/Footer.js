import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import heart from '../Assets/Images/logo132.png';

const Footer = () => {
    return (
        <Outher fluid>
            <StyledContainer fluid>
                <Row>
                    <ColClass>
                        <Col md={4}>
                            <Img src={heart} id="heart" alt="wosp logo" />
                        </Col>
                    </ColClass>

                    <ColClass>
                        <Col md={5} />
                    </ColClass>

                    <Col md={3}>Socjalmendja</Col>
                </Row>
            </StyledContainer>
        </Outher>
    );
};
const ColClass = styled.div`
    padding: 12px;
    width: 32%;
    height: 150px;
    background: ${({ theme }) => theme.color.navyBlue};
    display: table-cell;
    border-right: solid rgba(255, 255, 255, 0.2) 2px;
`;

const Outher = styled.div`
    margin-top: 100px;
    padding: 30px;
    background: ${({ theme }) => theme.color.navyBlue};
`;

const StyledContainer = styled(Container)`
    /* outline: pink 1px solid; */

    div {
        outline: black px solid;
    }
`;

const Img = styled.img`
    width: 140px;
    display: inline-block;
    outline: pink 1px solid;
`;

export default Footer;
