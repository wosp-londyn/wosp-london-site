import React, { Component } from 'react';
import styled from 'styled-components';
import { CardDeck } from 'react-bootstrap';

import PostCard from './PostCard';
import SectionHeader from './SectionHeader';

// Deals with wrapping PostCards components
// Fetches API and generates posts previews based on incoming data

class PostCardGrid extends Component {
    constructor(props) {
        super(props);

        this.state = { data: [] };
        this.fetchPostData = this.fetchPostData.bind(this);
    }

    componentDidMount() {
        this.fetchPostData();
    }

    fetchPostData() {
        fetch(`https://wosplondyn.uk/wp-json/wp/v2/posts?_embed`)
            .then(response => response.json())
            .then(responseJSON => {
                this.setState({
                    data: responseJSON,
                });
            });
    }

    render() {
        const { data } = this.state;

        return (
            <Wrapper>
                <SectionHeader color={({ theme }) => theme.color.blue}>
                    Aktualności
                </SectionHeader>

                <StyledCardDeck>
                    {data.slice(0, 4).map(post => (
                        <PostCard post={post} key={post.id} />
                    ))}
                </StyledCardDeck>
            </Wrapper>
        );
    }
}

const Wrapper = styled.article`
    border: 1px solid ${({ theme }) => theme.color.blue};
    margin: 0;
`;

const StyledCardDeck = styled(CardDeck)`
    flex-direction: column;
`;

export default PostCardGrid;
