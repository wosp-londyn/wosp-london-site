import React from 'react';
import styled from 'styled-components';
import { CardDeck } from 'react-bootstrap';
import SectionHeader from './SectionHeader';
import FacebookCard from './FacebookCard';

// Pobiera dane z API
// Określa style  sekcji postów z fb

const FacebookCardGrid = () => {
    return (
        <Wrapper>
            <SectionHeader color={({ theme }) => theme.color.facebook}>
                Facebook
            </SectionHeader>

            <StyledCardDeck>
                <FacebookCard />
                <FacebookCard />
                <FacebookCard />
            </StyledCardDeck>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    border: 1px solid #a2a2a2;
    height: 1175px;

    display: none;

    ${({ theme }) => theme.media.above.xl} {
        display: block;
    }
`;

const StyledCardDeck = styled(CardDeck)`
    padding: 9px;
    margin-top: 30px;
    flex-direction: column;

    ${({ theme }) => theme.media.above.md} {
        margin-top: 0;
    }
`;
export default FacebookCardGrid;
