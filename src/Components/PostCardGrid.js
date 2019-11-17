import React from 'react';
import styled from 'styled-components';
import { CardDeck } from 'react-bootstrap';

import PostCard from './PostCard';
import SectionHeader from './SectionHeader';

import cheese from '../Assets/Images/cheese.png';

const PostCardGrid = () => {
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
        <>
            <SectionHeader color={({ theme }) => theme.color.red}>
                Artykuły
            </SectionHeader>

            <StyledCardDeck>
                {posts.map(post => (
                    <PostCard
                        title={post.title}
                        text={post.text}
                        img={post.img}
                        key={post.title}
                    />
                ))}
            </StyledCardDeck>
        </>
    );
};

const StyledCardDeck = styled(CardDeck)`
    flex-direction: column;
`;

export default PostCardGrid;
