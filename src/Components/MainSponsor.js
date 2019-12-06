import React from 'react';
import styled from 'styled-components';
import transfergo from '../Assets/Images/Sponsors/transfergo.png';
import SectionHeader from './SectionHeader';

const MainSponsor = () => {
    return (
        <>
        <Link
            href="https://www.transfergo.com/pl"
            target="_blank"
            rel="noopener noreferrer"
        >
            <StyledSectionHeader color={({ theme }) => theme.color.green}>
                WPŁAĆ NA WOŚP
            </StyledSectionHeader>
            <Wrapper>

                    <Img src={transfergo} alt="" />

            </Wrapper>
            <StyledDiv>
                <p>
                    GŁÓWNY SPONSOR WOŚP LONDYN
                </p>
            </StyledDiv>
        </Link>
        </>
    );
};

const Link = styled.a`
    :hover{
        text-decoration: none;
        filter: brightness(105%);
    }
    :active{
        filter: brightness(95%);
    }

`;

const StyledDiv = styled.div`
    p{
        border: 1px solid ${({ theme }) => theme.color.green};
        line-height: 2.5;
        font-weight: 700;
        color: #1f1f1f;
    }
    ${({ theme }) => theme.media.below.xl} {
        display: none;
    }
`;

const Img = styled.img`
    margin: 30px 0;
`;

const Wrapper = styled.section`
    display: none;
    background-color: ${({ theme }) => theme.color.green};
    height: 135px;
    margin: -20px 0 0 0;

    ${({ theme }) => theme.media.above.xl} {
        display: block;
    }
`;

const StyledSectionHeader = styled(SectionHeader)`
    height: 80px;
    font-size: 1.5rem;
    font-weight: 700;
    width: 100%;
    margin: 0;
    ${({ theme }) => theme.media.below.xl} {
        display: none;
    }


`;

export default MainSponsor;
