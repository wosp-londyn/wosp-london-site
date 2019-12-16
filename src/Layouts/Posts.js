import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
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
            `https://wordpress.wosplondyn.uk/wp-json/wp/v2/posts?_embed&per_page=100&page=1`
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
            <>
                <Helmet>
                    <title>WOŚP Londyn - Artykuły</title>
                    <meta
                        name="description"
                        content="WOŚP Londyn - Artykuły. Zobacz co nowego! Najnowsze informacje. Dołącz do nas! - Gramy do końca świata i o jeden dzień dłużej!"
                    />
                    <meta
                        name="keywords"
                        content="WOŚP, WOŚP 2020, WOŚP Londyn, WOŚP Anglia, WOŚP Wielka Brytania, zbiórka pieniędzy Londyn, WOŚP London, WOŚP Great Britain, WOŚP England, WOŚP informacje, WOŚP Londyn informacje, WOŚP London informations, WOŚP Londyn wolontariusz, WOŚP Londyn jak zostać wolontariuszem "
                    />
                </Helmet>
                <Container>
                    {data.map((post, index) => (
                        <PostCard post={post} key={post ? post.id : index} />
                    ))}
                </Container>
            </>
        );
    }
}

export default Posts;
