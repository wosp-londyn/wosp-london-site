import React, { Component } from 'react';
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
        fetch(`https://wosplondyn-api.tk/wp-json/wp/v2/pages?slug=${slug}`)
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
        const { ContentWrapper } = this.props;

        return (
            <>
                {isLoading ? (
                    <Loading />
                ) : (
                    <ContentWrapper
                        dangerouslySetInnerHTML={createMarkup(
                            data.content.rendered
                        )}
                    />
                )}
            </>
        );
    }
}

PageTemplate.defaultProps = {
    ContentWrapper: 'div',
};
