import React from 'react';
import { Container, Col, Row, Nav } from 'react-bootstrap';
import styled from 'styled-components';
import heart from '../Assets/Images/logo132.png';
// import SocialMedia from './SocialMedia';

const Footer = () => {
    return (
        <>
            <StyledContainer fluid>
                <Container md="12">
                    <StyledRow>
                        <StyledCol md="4">
                            <img src={heart} id="heart" alt="wosp logo" />
                        </StyledCol>
                        <StyledCol md="4">
                            <WrapperSecondColumn>
                                <h2>NA SKRÓTY</h2>
                                <br />
                                <Nav className="flex-column">
                                    <Nav.Link href="/home" className="links">
                                        Strona Główna
                                    </Nav.Link>
                                    <Nav.Link href="/Posts" className="links">
                                        Aktualności
                                    </Nav.Link>
                                    <Nav.Link href="/Posts" className="links">
                                        Aktualności
                                    </Nav.Link>
                                    <Nav.Link href="/Program" className="links">
                                        Informacje
                                    </Nav.Link>
                                    <Nav.Link href="/Support" className="links">
                                        Wpłać na WOŚP
                                    </Nav.Link>
                                    <Nav.Link
                                        href="/Volunteer"
                                        className="links"
                                    >
                                        Zostań Wolontariuszem
                                    </Nav.Link>
                                    <Nav.Link href="/Contact" className="links">
                                        Kontakt
                                    </Nav.Link>
                                </Nav>
                            </WrapperSecondColumn>
                        </StyledCol>
                        <StyledCol md="4">
                            <h2>KONTAKT</h2>
                            <br />
                            <p>WOŚP sztab w Londynie</p>
                            <p>e-mail loremipsum@lorem.pl</p>
                            <p>Polityka prywatności</p>
                        </StyledCol>
                    </StyledRow>
                </Container>
            </StyledContainer>

            <FooterBottom fluid>
                <Container md="12">
                    <Row>
                        <Col>
                            <h2>
                                Copyright &copy; by HARDCODED dla WOŚP LONDYN
                            </h2>
                        </Col>
                    </Row>
                </Container>
            </FooterBottom>
        </>
    );
};

const StyledContainer = styled(Container)`
    background: ${({ theme }) => theme.color.navyBlue};
    margin-top: 150px;
`;
const StyledRow = styled(Row)`
    padding: 15px 0 15px 0;

    div:nth-child(2) {
        border-top: 3px solid rgba(255, 255, 255, 0.6);
        border-bottom: 3px solid rgba(255, 255, 255, 0.6);
    }
    ${({ theme }) => theme.media.above.md} {
        padding: 30px 0 30px 0;

        div:nth-child(2) {
            border-top: 0;
            border-bottom: 0;
            border-left: 3px solid rgba(255, 255, 255, 0.6);
            border-right: 3px solid rgba(255, 255, 255, 0.6);
        }
    }
`;
const StyledCol = styled(Col)`
    color: white;
    text-align: center;
    padding: 20px 0 20px 0;
    position: relative;
    h2 {
        font-size: 18px;
    }
`;

const FooterBottom = styled(Container)`
    background: ${({ theme }) => theme.color.footerBottom};
    color: white;
    text-align: center;
    position: relative;
    padding-top: 25px;
    padding-bottom: 25px;
    h2 {
        font-size: 12px;
        font-weight: 400;
    }
`;

const WrapperSecondColumn = styled.div`
    display: block;
    padding-left: 20%;
    padding-right: 20%;
    text-align: center;
    font-size: 14px;
    text-transform: uppercase;

    .links {
        color: rgba(255, 255, 255, 0.6);
        line-height: 5px;
    }
`;

export default Footer;
