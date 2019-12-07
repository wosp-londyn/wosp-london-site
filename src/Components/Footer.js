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
        <>
            <StyledContainer fluid>
                <Container md="12">
                    <StyledRow>
                        <StyledCol xs={12} md={4}>
                            <img src={logo} id="heart" alt="wosp logo" />
                        </StyledCol>
                        <StyledCol xs={12} md={4}>
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
                        <StyledCol xs={12} md={4}>
                            <WrapperContact>
                                <h2>KONTAKT</h2>
                                <br />
                                <p>WOŚP sztab w Londynie</p>
                                <p>E-mail: koordynator@wosplondyn.uk</p>
                            </WrapperContact>
                            <WrapperSocialMedia class="align-bottom" >
                                <SocialMedia/>
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
                                Copyright &copy; 2019 HARDCODED dla WOŚP LONDYN
                            </h2>
                        </Col>
                    </Row>
                </Container>
            </FooterBottom>
        </>
    );
};

const StyledNav = styled(Nav)`
    a:hover {
        color: white;
    }
`;

const StyledContainer = styled(Container)`
    background: ${({ theme }) => theme.color.navyBlue};
    margin-top: 150px;
`;

const StyledRow = styled(Row)`
    padding: 15px 0 0 0;

    div:nth-child(2) {
        border-top: 1px solid white;
        border-bottom: 1px solid white;

    }
    ${({ theme }) => theme.media.above.md} {
        padding: 30px 0 30px 0;

        div:nth-child(2) {
            border-top: 0;
            border-bottom: 0;
            border-left: 1px solid white;
            border-right: 1px solid white;
        }
    }
`;

const StyledCol = styled(Col)`
    color: rgba(255, 255, 255, 0.6);
    text-align: center;
    :first-child{
        padding-top: 40px;
        padding-bottom: 40px;
        height: 350px;

        ${({ theme }) => theme.media.above.md} {
            padding-top: 0;
            padding-bottom: 0;
            padding-left: 0;
            padding-right: 20px;
            height: auto;
            margin: auto;
        }
    }

    h2 {
        font-size: 18px;
        color: white !important;
        font-weight: 700 !important;
    }
    img{
        max-width: 100%;
        max-height: 100%;

        ${({ theme }) => theme.media.above.lg} {
            max-width: 80%;
            max-height: 80%;
        }
    }
`;


const WrapperSecondColumn = styled.div`
    text-align: center;
    text-transform: uppercase;
    padding: 15px 0 15px 0;


    .links {
        color: rgba(255, 255, 255, 0.6);
        line-height: 1.75;
        font-weight: 400;
        font-size: 16px;
    }
`;
const WrapperContact = styled.div`
    padding: 15px 0 0 0;

`;
const WrapperSocialMedia = styled(Col)`
    display: inline;
    border: none !important;
    a {
        align-content: space-around;
    }

    a:hover {
        box-shadow: 2px 5px 8px -5px white;
        color: white;
    }
    div{
        margin: auto;
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
