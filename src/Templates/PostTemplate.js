import React, { Component } from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';

class PostTemplate extends Component {
    render() {
        const createMarkup = text => {
            return { __html: text };
        };

        const { post } = this.props;

        const date = new Date(post.date);

        return (
            <StyledContainer>
                <HeadRow>
                    <Col>
                        <img
                            variant="top"
                            src={
                                post._embedded['wp:featuredmedia']['0']
                                    .source_url
                            }
                            alt={
                                post._embedded['wp:featuredmedia']['0'].alt_text
                            }
                        />
                        <Fade />
                        <h1>{post.title.rendered}</h1>
                    </Col>
                </HeadRow>
                <Row>
                    <Col xs={2}>
                        <p>{`${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`}</p>
                    </Col>
                    <Col xs={10}>
                        <hr />
                    </Col>
                </Row>
                <Row>
                    <div
                        dangerouslySetInnerHTML={createMarkup(
                            post.content.rendered
                        )}
                    />
                </Row>
            </StyledContainer>
        );
    }
}
const StyledContainer = styled(Container)``;

const HeadRow = styled(Row)`
    position: relative;

    img {
        width: calc(100% + 30px);
        margin: 0 0 0 -15px;

        ${({ theme }) => theme.media.above.sm} {
            margin: 0;
            width: 100%;
        }
    }

    h1 {
        position: absolute;
        bottom: 0;
        padding: 10px 0;

        font-size: 29px;
        color: white;
    }
`;

const Fade = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    height: 100%;
    width: 100%;

    ${({ theme }) => theme.media.above.sm} {
        width: calc(100% - 30px);
        left: 15px;
    }

    background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 1) 0%,
        rgba(59, 59, 59, 0.8211659663865546) 23%,
        rgba(255, 255, 255, 0) 100%
    );
`;

export default PostTemplate;
