import React, { Component } from 'react';
import styled from 'styled-components';
import Loading from '../Layouts/Loading';

export default class PageTemplate extends Component {
    constructor(props) {
        super(props);

        this.state = { data: [], isLoading: true };
        this.fetchPostData = this.fetchPostData.bind(this);
    }

    componentDidMount() {
        this.fetchPostData();
    }

    fetchPostData() {
        const { slug } = this.props;
        fetch(`https://wosplondyn.uk/wp-json/wp/v2/pages?slug=${slug}`)
            .then(response => response.json())
            .then(responseJSON => {
                this.setState({
                    data: responseJSON[0],
                    isLoading: false,
                });
                console.log(this.state.data);
            });
    }

    render() {
        const createMarkup = text => {
            return { __html: text };
        };

        const { data, isLoading } = this.state;

        return (
            <>
                {isLoading ? (
                    <Loading />
                ) : (
                    <ContentBlock
                        dangerouslySetInnerHTML={createMarkup(
                            data.content.rendered
                        )}
                    />
                )}
            </>
        );
    }
}

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
