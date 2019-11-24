import React, { Component } from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';

class PostTemplate extends Component {
    render() {
        const createMarkup = text => {
            return { __html: text };
        };

        const { post } = this.props;

        const date = new Date(post.date);

        return (
            <StyledContainer>
                <img
                    variant="top"
                    src={post._embedded['wp:featuredmedia']['0'].source_url}
                    alt={post._embedded['wp:featuredmedia']['0'].alt_text}
                />
                <h1>{post.title.rendered}</h1>
                <p>{`${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`}</p>
                <div
                    dangerouslySetInnerHTML={createMarkup(
                        post.content.rendered
                    )}
                />
            </StyledContainer>
        );
    }
}
const StyledContainer = styled(Container)`
    img {
        max-width: 100%;
    }
`;

export default PostTemplate;
