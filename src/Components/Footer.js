import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Col, Row, Nav } from 'react-bootstrap';
import styled from 'styled-components';
import heart from '../Assets/Images/logo132.png';
import SocialMedia from './SocialMedia';

const Footer = () => {
    const links = [
        { name: 'Strona Główna', slug: '/' },
        { name: 'Aktualności', slug: '/aktualnosci/artykuly' },
        { name: 'Galeria', slug: '/aktualnosci/galeria' },
        { name: 'Program', slug: '/informacje/program' },
        { name: 'Gwiazdy', slug: '/informacje/gwiazdy' },
        { name: 'Aukcje', slug: '/wspieraj-nas/aukcje' },
        { name: 'Kontakt', slug: '/kontakt' },
    ];

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
                                <StyledNav className="flex-column">
                                    {links.map(link => (
                                        <Nav.Link
                                            key={link.slug}
                                            as={Link}
                                            to={link.slug}
                                            className="links"
                                        >
                                            {link.name}
                                        </Nav.Link>
                                    ))}
                                </StyledNav>
                            </WrapperSecondColumn>
                        </StyledCol>
                        <StyledCol md="4">
                            <h2>KONTAKT</h2>
                            <br />
                            <p>WOŚP sztab w Londynie</p>
                            <p>e-mail loremipsum@lorem.pl</p>
                            <p>Polityka prywatności</p>
                            <WrapperSocialMedia>
                                <SocialMedia />
                            </WrapperSocialMedia>
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

const StyledNav = styled(Nav)`
    a {
        padding-left: 0;
    }
    a:hover {
        color: white;
    }
`;

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
    color: rgba(255, 255, 255, 0.6);
    padding: 20px 0px 20px 30px;
    text-align: center;

    h2 {
        font-size: 18px;
        color: white !important;
    }

    img {
        padding-right: 20px;
    }
`;

const WrapperSecondColumn = styled.div`
    text-align: left;
    font-size: 14px;
    text-transform: uppercase;

    .links {
        color: rgba(255, 255, 255, 0.6);
        line-height: 15px;
    }
`;

const WrapperSocialMedia = styled.div`
    float: left;

    a {
        align-content: space-around;
    }

    a:hover {
        box-shadow: 2px 5px 8px -5px white;
        color: white;
    }
`;

const FooterBottom = styled(Container)`
    background: ${({ theme }) => theme.color.footerBottom};
    color: white;
    text-align: center;
    padding-top: 25px;
    padding-bottom: 25px;
    h2 {
        font-size: 12px;
        font-weight: 400;
    }
`;
export default Footer;
