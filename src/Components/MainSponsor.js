import React from 'react';
import styled from 'styled-components';
import transfergo from '../Assets/Images/Sponsors/transfergo.png';
import SectionHeader from './SectionHeader';

const MainSponsor = () => {
    return (
        <>
            <StyledSectionHeader color={({ theme }) => theme.color.orange}>
                Główny sponsor
            </StyledSectionHeader>
            <Wrapper>
                <a
                    href="https://www.transfergo.com/pl"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Img src={transfergo} alt="" />
                </a>
            </Wrapper>
        </>
    );
};

const Img = styled.img`
    margin: 30px 0;
`;

const Wrapper = styled.section`
    display: none;

    ${({ theme }) => theme.media.above.xl} {
        display: block;
        border: 1px solid ${({ theme }) => theme.color.orange};
        margin-bottom: 50px;
    }
`;

const StyledSectionHeader = styled(SectionHeader)`
    ${({ theme }) => theme.media.below.xl} {
        display: none;
    }
`;

export default MainSponsor;
