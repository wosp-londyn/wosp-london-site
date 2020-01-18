import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import PageTemplate from '../Templates/PageTemplate';

const ContentBlock = styled.div`
    ul {
        margin-top: -5px;
        display: flex;
        flex-direction: column;
    }

    li {
        flex-grow: 1;
        padding: 5px 0;
    }

    img {
        width: 100%;
        height: 100%;
    }

    ${({ theme }) => theme.media.above.md} {
        ul {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
        }

        li {
            height: 230px;
            flex-grow: 1;
            padding: 5px;
        }

        img {
            width: inherit;
            height: inherit;
            max-height: 100%;
            min-width: 100%;
            object-fit: cover;
            vertical-align: bottom;
        }

        li:last-child:not(:nth-child(even)) {
            width: 100%;
            height: 100%;

            img {
                height: 100%;
                width: 100%;
            }
        }
        ${({ theme }) => theme.media.above.xl} {
            li {
                height: 270px;
            }
        }
    }
`;

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
