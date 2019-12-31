import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import {
    transfergo,
    mleczko,
    smartchoice,
    ant,
    piling,
    emotionwraps,
    galitsyna,
} from '../Assets/Images/Sponsors';

const Sidebar = () => {
    const goldSponsors = [
        { img: mleczko, link: 'https://www.mleczkodelikatesy.com/' },
        { img: smartchoice, link: 'https://smartchoicegroup.co.uk/' },
        { img: ant, link: 'https://antbm.co.uk/' },
    ];

    const silverSponsors = [
        { img: piling, link: 'http://pilefoundation.co.uk/' },
        { img: emotionwraps, link: 'http://www.emotionwraps.co.uk/' },
        { img: galitsyna, link: 'http://galitsyna-show.com/' },
    ];

    return (
        <Wrapper>
            <ButtonsContainer>
                <StyledButton
                    as={Link}
                    to="/wspieraj-nas/wplac-na-wosp"
                    // target="_blank"
                    // rel="noopener noreferrer"
                >
                    WPŁAĆ NA WOŚP
                </StyledButton>
                <StyledButton as={Link} to="/informacje/program" bgcolor="pink">
                    PROGRAM
                </StyledButton>
            </ButtonsContainer>
            <SponsorsBar>SPONSORZY</SponsorsBar>
            <SponsorsGroup level="main">
                <a
                    href="https://www.transfergo.com/pl"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={transfergo} alt="" />
                </a>
            </SponsorsGroup>
            <SponsorsGroup level="gold">
                {goldSponsors.map(sponsor => (
                    <a
                        key={sponsor.link}
                        href={sponsor.link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={sponsor.img} alt="" />
                    </a>
                ))}
            </SponsorsGroup>
            <SponsorsGroup level="silver">
                {silverSponsors.map(sponsor => (
                    <a
                        key={sponsor.link}
                        href={sponsor.link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={sponsor.img} alt="" />
                    </a>
                ))}
            </SponsorsGroup>
        </Wrapper>
    );
};

const SponsorsBar = styled.h1`
    width: 100%;
    height: 50px;
    text-align: center;
    padding: 15px 0;

    letter-spacing: 0.1rem;
    font-size: 16px;
    font-weight: bold;
    color: white;

    background: #737373;
`;
const SponsorsGroup = styled.section`
    width: 100%;
    padding: 20px;
    border-left: 1px solid #9a9a9a;
    border-right: 1px solid #9a9a9a;

    display: flex;
    flex-direction: column;

    :last-child {
        border-bottom: 1px solid #9a9a9a;
    }

    ${({ level }) =>
        level === 'main'
            ? `background-color: #fff9b3 `
            : level === 'gold'
            ? `background-color: #FFFBEF`
            : `background-color: #FBFBFB;
            `}

    img {
        width: 100%;
        margin: 10px 0;
    }
`;

const ButtonsContainer = styled.nav``;

const StyledButton = styled(Button)`
    border-radius: 0;
    border: none;
    width: 100%;
    height: 100px;
    margin: 0 0 20px;
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${({ bgcolor, theme }) =>
        bgcolor === 'pink' ? theme.color.pink : theme.color.green};

    transition: opacity 0.2s ease-in-out;
    :hover {
        text-decoration: none;
        color: white;
        opacity: 90%;
        background-color: ${({ bgcolor, theme }) =>
            bgcolor === 'pink' ? theme.color.pink : theme.color.green};
    }

    text-align: center;
    color: white;
    text-decoration: none;
    font-size: 14px;
    font-weight: bold;
    ${({ theme }) => theme.media.above.xl} {
        font-size: 16px;
    }
`;

const Wrapper = styled.aside`
    display: none;

    ${({ theme }) => theme.media.above.lg} {
        display: flex;
        flex-direction: column;
        background: #fbfbfb;
    }
`;

export default Sidebar;
