import React from 'react';
import styled from 'styled-components';
import { CardDeck } from 'react-bootstrap';
import SectionHeader from './SectionHeader';
import FacebookCard from './FacebookCard';

// Pobiera dane z API
// Określa style  sekcji postów z fb

const FacebookCardGrid = () => {
    // Symulacja danych  z API
    const posts = [
        {
            name: 'Name1',
            text:
                "Some quick example text to build on the card title and make up the bulk of the card's content.",
        },
        {
            name: 'WCHUj',
            text: "Some e card's content.",
        },
        {
            name: 'John Doe',
            text: "Some e card's sdfds.",
        },
    ];

    return (
        <Wrapper>
            <SectionHeader color={({ theme }) => theme.color.facebook}>
                Facebook
            </SectionHeader>

            <StyledCardDeck>
                {posts.map(post => (
                    <FacebookCard
                        name={post.name}
                        text={post.text}
                        key={post.name}
                    />
                ))}
            </StyledCardDeck>
        </Wrapper>
    );
};

const Wrapper = styled.article`
    border: 1px solid #a2a2a2;
    height: 1175px;
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
