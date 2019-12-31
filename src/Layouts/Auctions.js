import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import PageTemplate from '../Templates/PageTemplate';

const ContentBlock = styled.div`
    img {
        max-width: 100%;
    }
`;

const Auctions = () => {
    return (
        <>
            <Helmet>
                <title>WOŚP Londyn - Aukcje</title>
                <meta
                    name="description"
                    content="WOŚP Londyn - Aukcje. Sprawdź co można wylicytować! Dołącz do nas! - Gramy do końca świata i o jeden dzień dłużej!"
                />
                <meta
                    name="keywords"
                    content="WOŚP, WOŚP 2020, WOŚP Londyn, WOŚP Anglia, WOŚP Wielka Brytania, zbiórka pieniędzy Londyn, WOŚP London, WOŚP Great Britain, WOŚP England, WOŚP auctions, WOŚP aukcje, WOŚP Londyn aukcje, WOŚP London auctions"
                />
            </Helmet>
            <PageTemplate slug="aukcje" ContentWrapper={ContentBlock} />
        </>
    );
};

export default Auctions;
