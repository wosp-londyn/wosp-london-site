import React from 'react';
import slugify from 'slugify';
import styled from 'styled-components';
import { CardDeck } from 'react-bootstrap';

import PostCard from './PostCard';
import SectionHeader from './SectionHeader';

import cheese from '../Assets/Images/cheese.png';

// Deals with wrapping PostCards components
// Fetches API and generates posts previews based on incoming data

const PostCardGrid = () => {
    // Symulacja danych z API
    const posts = [
        {
            title: 'Title1',
            text:
                "Some quick example text to build on the card title and make up the bulk of the card's content.",
            img: cheese,
        },
        {
            title: 'Title2',
            text: "Some e card's content.",
            img: cheese,
        },
        {
            title: 'Title3',
            text: "Some e card's sdfds.",
            img: cheese,
        },
    ];

    return (
        <Wrapper>
            <SectionHeader color={({ theme }) => theme.color.blue}>
                Aktualności
            </SectionHeader>

            <StyledCardDeck>
                {posts.map(post => (
                    <PostCard
                        title={post.title}
                        text={post.text}
                        img={post.img}
                        // slugify allows to create slug on base of title
                        slug={slugify(post.title)}
                        key={post.title}
                    />
                ))}
            </StyledCardDeck>
        </Wrapper>
    );
};

const Wrapper = styled.article`
    border: 1px solid ${({ theme }) => theme.color.blue};
    height: 1175px;
`;

const StyledCardDeck = styled(CardDeck)`
    flex-direction: column;
`;

export default PostCardGrid;
