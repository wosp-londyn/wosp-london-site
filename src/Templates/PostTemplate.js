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
                <HrRow>
                    <Col xs={4} sm={3} md={2} xl={1}>
                        <p>{`${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`}</p>
                    </Col>
                    <Col xs={8} sm={9} md={10} xl={11}>
                        <hr />
                    </Col>
                </HrRow>
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
        padding: 20px;
        width: calc(100% - 30px);
        height: 120px;
        text-align: center;

        font-size: 19px;
        ${({ theme }) => theme.media.above.xs} {
            font-size: 22px;
        }
        ${({ theme }) => theme.media.above.sm} {
            font-size: 29px;
        }
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

const HrRow = styled(Row)`
    margin: 20px 0;

    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    * {
        padding: 0;
        margin: 0;
    }

    hr {
        border-top: 2px solid #9a9a9a;
        margin: 0 -15px 0 0;
        ${({ theme }) => theme.media.above.sm} {
            margin: 0;
        }
    }

    p {
        text-align: left;
    }
`;

export default PostTemplate;
