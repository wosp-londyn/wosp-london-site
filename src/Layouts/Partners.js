import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import PageTemplate from '../Templates/PageTemplate';

const ContentBlock = styled.div``;

const Partners = () => {
    return (
        <>
            <Helmet>
                <title>WOŚP Londyn - Partnerzy</title>
                <meta
                    name="description"
                    content="WOŚP Londyn - Patrnerzy. Sprawdź kto nas wspiera! Dołącz do nas! - Gramy do końca świata i o jeden dzień dłużej!"
                />
                <meta
                    name="keywords"
                    content="WOŚP, WOŚP 2020, WOŚP Londyn, WOŚP Anglia, WOŚP Wielka Brytania, zbiórka pieniędzy Londyn, WOŚP London, WOŚP Great Britain, WOŚP England, WOŚP partnerzy, WOŚP Londyn partnerzy, WOŚP London partners, "
                />
            </Helmet>
            <PageTemplate slug="partnerzy" ContentWrapper={ContentBlock} />
        </>
    );
};

export default Partners;
