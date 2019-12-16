import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import PageTemplate from '../Templates/PageTemplate';

const ContentBlock = styled.div``;

const Media = () => {
    return (
        <>
            <Helmet>
                <title>WOŚP Londyn - Media</title>
                <meta
                    name="description"
                    content="WOŚP Londyn - Media. Sprawdź kto nas wspiera! Dołącz do nas! - Gramy do końca świata i o jeden dzień dłużej!"
                />
                <meta
                    name="keywords"
                    content="WOŚP, WOŚP 2020, WOŚP Londyn, WOŚP Anglia, WOŚP Wielka Brytania, zbiórka pieniędzy Londyn, WOŚP London, WOŚP Great Britain, WOŚP England, WOŚP media, WOŚP partnerzy, WOŚP Londyn partnerzy, WOŚP London partners, WOŚP Londyn media,"
                />
            </Helmet>
            <PageTemplate slug="media" ContentWrapper={ContentBlock} />
        </>
    );
};

export default Media;
