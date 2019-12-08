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

        this.state = { data: [null, null, null, null] };
        this.fetchPostData = this.fetchPostData.bind(this);
    }

    componentDidMount() {
        this.fetchPostData();
    }

    fetchPostData() {
        fetch(
            `https://wosplondyn-api.tk/wp-json/wp/v2/posts?_embed&per_page=4&page=1`
        )
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
                <StyledSectionHeader color={({ theme }) => theme.color.blue}>
                    AKTUALNOŚCI
                </StyledSectionHeader>

                <StyledCardDeck>
                    {data.map((post, index) => (
                        <PostCard post={post} key={post ? post.id : index} />
                    ))}
                </StyledCardDeck>
            </Wrapper>
        );
    }
}
const StyledSectionHeader = styled(SectionHeader)`
    height: 80px;
    font-weight: 700;
    font-size: 1.25rem;
`;

const Wrapper = styled.div`
    border: 1px solid ${({ theme }) => theme.color.blue};
    margin: 0;
    background: #f0f0f0;
`;

const StyledCardDeck = styled(CardDeck)`
    flex-direction: column;
    width: 100%;
    margin: 0 !important;
`;

export default PostCardGrid;
