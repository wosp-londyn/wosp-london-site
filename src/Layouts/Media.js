import React from 'react';
import styled from 'styled-components';
import PageTemplate from '../Templates/PageTemplate';

const ContentBlock = styled.div``;

const Media = () => {
    return <PageTemplate slug="media" ContentWrapper={ContentBlock} />;
};

export default Media;
