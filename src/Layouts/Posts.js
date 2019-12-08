import React, { Component } from 'react';
// import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import { PostCard } from '../Components';

class Posts extends Component {
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
            `https://wosplondyn-api.tk/wp-json/wp/v2/posts?_embed&per_page=100&page=1`
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
            <Container>
                {data.map((post, index) => (
                    <PostCard post={post} key={post ? post.id : index} />
                ))}
            </Container>
        );
    }
}

export default Posts;
