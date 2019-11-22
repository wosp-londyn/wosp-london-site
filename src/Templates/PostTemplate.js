// import React from 'react';
import React, { Component } from 'react';
// import {Container, Col, Row} from 'react-bootstrap'

class PostTemplate extends Component {
    render() {
        const createMarkup = text => {
            return { __html: text };
        };

        const { title, content } = this.props.post;

        return (
            <div>
                <h1>{title.rendered}</h1>
                <div dangerouslySetInnerHTML={createMarkup(content.rendered)} />
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
