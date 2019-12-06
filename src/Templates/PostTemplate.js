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
                    <Col>
                        <p>{`${date.getDate()}.${date.getMonth() +
                            1}.${date.getFullYear()}`}</p>
                    </Col>
                </HrRow>
                <Row>
                    <ContentBlock
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
        padding: 20px 0 20px 0;
        width: calc(100% - 30px);
        text-align: center;
        font-weight: 700;

        font-size: 19px;
        ${({ theme }) => theme.media.above.xs} {
            font-size: 22px;
        }
        ${({ theme }) => theme.media.above.sm} {
            font-size: 29px;
            padding: 20px 10px 20px 10px;
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

    background: rgb(0, 0, 0);
    background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 1) 0%,
        rgba(0, 0, 0, 0) 100%
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
        color: #6e6e6e;
    }

    p:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 0.7em;
        border-top: 2px solid #6e6e6e;
        z-index: -1;
        margin-left: 90px;
    }
`;

const ContentBlock = styled.div`
    padding: 0 5px;
    width: calc(100% - 10px);
    text-align: justify;

    ${({ theme }) => theme.media.above.sm} {
        padding: 0 15px;
        width: 100%;
    }

    img {
        max-width: 100%;
    }

    li {
        text-align: center;

        ${({ theme }) => theme.media.above.sm} {
            display: inline-block;
            width: 50%;

            :first-child {
                padding-right: 10px;
            }

            :nth-child(even) {
                padding-left: 10px;
            }
        }
    }
`;

export default PostTemplate;
