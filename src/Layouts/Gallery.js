import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import PageTemplate from '../Templates/PageTemplate';

const ContentBlock = styled.div``;

const Gallery = () => {
    return (
        <>
            <Helmet>
                <title>WOŚP Londyn - Galeria</title>
                <meta
                    name="description"
                    content="WOŚP Londyn - Zobacz zdjęcia z tego roku i poprzednich lat! Dołącz do nas! - Gramy do końca świata i o jeden dzień dłużej!"
                />
                <meta
                    name="keywords"
                    content="WOŚP, WOŚP 2020, WOŚP Londyn, WOŚP Anglia, WOŚP Wielka Brytania, zbiórka pieniędzy Londyn, WOŚP London, WOŚP Great Britain, WOŚP England, WOŚP galeria, WOŚP gallery, WOŚP Londyn galeria, WOŚP London gallery, WOŚP zdjęcia, WOŚP Londyn zdjęcia, WOŚP w Londynie zdjęcia"
                />
            </Helmet>
            <PageTemplate slug="galeria" ContentWrapper={ContentBlock} />
        </>
    );
};

export default Gallery;
