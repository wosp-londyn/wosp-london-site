// import React from 'react';
import React, { Component } from 'react';
// import {Container, Col, Row} from 'react-bootstrap'

class PostTemplate extends Component {
    render() {
        const createMarkup = text => {
            return { __html: text };
        };

        const { post } = this.props;

        return (
            <div>
                <img
                    variant="top"
                    src={post._embedded['wp:featuredmedia']['0'].source_url}
                    alt={post._embedded['wp:featuredmedia']['0'].alt_text}
                />
                <h1>{post.title.rendered}</h1>
                <p>{post.date}</p>
                <div
                    dangerouslySetInnerHTML={createMarkup(
                        post.content.rendered
                    )}
                />
            </div>
        );
    }
}

// const PostTemplate = title => {
//     const createMarkup = text => {
//         return { __html: text };
//     };

//     return (
//         <div>
//             {/* <section>
//                 <div
//                     dangerouslySetInnerHTML={createMarkup(
//                         post.content.rendered
//                     )}
//                 />
//             </section>
//              */}
//         </div>
//     );
// };

export default PostTemplate;
