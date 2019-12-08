import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Col, Row, Nav } from 'react-bootstrap';
import styled from 'styled-components';
import logo from '../Assets/Images/logo-512.png';
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
        <footer>
            <Top>
                <Container md="12">
                    <StyledRow>
                        <StyledCol xs={12} md={4}>
                            <Img src={logo} alt="wosp logo" />
                        </StyledCol>
                        <StyledCol xs={12} md={4}>
                            <h2>NA SKRÓTY</h2>
                            <br />
                            <StyledNav>
                                {links.map(link => (
                                    <Nav.Link
                                        key={link.slug}
                                        as={Link}
                                        to={link.slug}
                                    >
                                        {link.name}
                                    </Nav.Link>
                                ))}
                            </StyledNav>
                        </StyledCol>
                        <StyledCol xs={12} md={4}>
                            <h2>KONTAKT</h2>
                            <br />

                            <h6>WOŚP sztab w Londynie</h6>
                            <br />
                            <br />

                            <section>
                                <address>
                                    <a href="mailto:koordynator@wosplondyn.uk">
                                        koordynator@wosplondyn.uk
                                    </a>
                                </address>
                                <address>
                                    <a href="mailto:wolontariusze@wosplondyn.uk">
                                        wolontariusze@wosplondyn.uk
                                    </a>
                                </address>
                                <address>
                                    <a href="mailto:sponsorzy@wosplondyn.uk">
                                        sponsorzy@wosplondyn.uk
                                    </a>
                                </address>
                                <address>
                                    <a href="mailto:media@wosplondyn.uk">
                                        media@wosplondyn.uk
                                    </a>
                                </address>
                            </section>
                            <br />

                            <SocialMedia />
                        </StyledCol>
                    </StyledRow>
                </Container>
            </Top>

            <Bottom>
                <Container md="12">
                    <Row>
                        <Col>
                            <h2>
                                Copyright &copy; 2019 HARDCODED dla WOŚP LONDYN
                            </h2>
                        </Col>
                    </Row>
                </Container>
            </Bottom>
        </footer>
    );
};

const StyledNav = styled(Nav)`
    display: flex;
    flex-direction: column;

    a {
        color: rgba(255, 255, 255, 0.6);
        line-height: 1.75;
        font-weight: 400;
        font-size: 16px;
        text-transform: uppercase;
    }
`;

const StyledRow = styled(Row)`
    padding: 15px 0 0 0;

    > div:nth-child(2) {
        border-top: 1px solid white;
        border-bottom: 1px solid white;

        ${({ theme }) => theme.media.above.md} {
            border-top: 0;
            border-bottom: 0;
            border-left: 1px solid white;
            border-right: 1px solid white;
        }
    }

    ${({ theme }) => theme.media.above.md} {
        padding: 30px 0 30px 0;
    }
`;

const StyledCol = styled(Col)`
    color: rgba(255, 255, 255, 0.6);
    text-align: center;

    padding: 15px 0;

    :first-child {
        padding-top: 40px;
        padding-bottom: 40px;
        height: 350px;

        ${({ theme }) => theme.media.above.md} {
            padding: 0 20px 0 0;
            height: auto;
            margin: auto;
        }
    }

    h2 {
        font-size: 18px;
        color: white !important;
        font-weight: 700 !important;
    }

    a {
        color: rgba(255, 255, 255, 0.6);
        font-weight: 400;
        font-size: 16px;
        text-decoration: none;
    }

    a:hover {
        color: white;
    }
`;

const Img = styled.img`
    max-width: 100%;
    max-height: 100%;

    ${({ theme }) => theme.media.above.lg} {
        max-width: 80%;
        max-height: 80%;
    }
`;

const Top = styled.section`
    background: ${({ theme }) => theme.color.navyBlue};
    margin-top: 150px;
    width: 100%;
`;

const Bottom = styled.section`
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
