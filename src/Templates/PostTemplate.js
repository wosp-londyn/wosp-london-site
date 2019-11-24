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
            <Container>
                <HeadRow>
                    <img
                        variant="top"
                        src={post._embedded['wp:featuredmedia']['0'].source_url}
                        alt={post._embedded['wp:featuredmedia']['0'].alt_text}
                    />
                    <div>
                        <h1>{post.title.rendered}</h1>
                    </div>
                </HeadRow>
                <HrRow>
                    <Col xs={2}>
                        <p>{`${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`}</p>
                    </Col>
                    <Col xs={10}>
                        <hr />
                    </Col>
                </HrRow>
                <Row>
                    <Content
                        dangerouslySetInnerHTML={createMarkup(
                            post.content.rendered
                        )}
                    />
                </Row>
            </Container>
        );
    }
}

const HeadRow = styled(Row)`
    position: relative;
    width: 100%;

    img {
        max-width: calc(100% + 30px);
        margin: 0 0 0 -15px;

        ${({ theme }) => theme.media.above.sm} {
            max-width: calc(100%);
            margin: 0 auto;
            /* width: 100%; */
        }
    }

    div {
        position: absolute;
        bottom: 0;

        display: flex;
        align-items: flex-end;

        width: 100%;
        height: 100%;
        background: linear-gradient(
            0deg,
            rgba(0, 0, 0, 1) 0%,
            rgba(0, 0, 0, 0.2) 25%,
            rgba(255, 255, 255, 0) 100%
        );
    }

    h1 {
        font-size: 29px;
        padding: 30px 15px 15px;
        color: white;

        margin: 0 auto;
        width: 50%;
        height: 120px;
    }
`;

const HrRow = styled(Row)`
    margin: 30px 0 20px;
`;

const Content = styled.div`
    text-align: justify;
    padding: 0 5px;

    * {
        max-width: 100%;
    }
`;

export default PostTemplate;
