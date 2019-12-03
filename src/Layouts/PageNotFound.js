import React from 'react';
import styled from 'styled-components';
import owsiak from '../Assets/Images/404.png';

const PageNotFound = () => {
    return (
        <Wrapper>
            <div style={{ paddingTop: '100px' }}>
                <div className="notfound">
                    <div className="notfound-404">
                        <h1>
                            4<span />4
                        </h1>
                    </div>
                    <h2>
                        Upss!
                        <br /> Chyba graliśmy za głośno
                    </h2>
                    <p>
                        Strona której szukasz, nie została odnaleziona. Sprawdź
                        czy we wpisanym przez Ciebie adresie nie ma błędu.
                    </p>
                </div>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    box-sizing: border-box;

    body {
        padding: 0;
        margin: 0;
    }

    #notfound {
        height: 100vh;
        position: relative;
        left: 50%;
        top: 50%;
    }

    .notfound {
        max-width: 1000px;
        width: 100%;
        text-align: center;
        line-height: 1.4;
    }

    .notfound .notfound-404 {
        height: 190px;
    }

    .notfound .notfound-404 h1 {
        font-family: 'Montserrat', sans-serif;
        font-size: 250px;
        font-weight: 700;
        margin: 0px;
        color: ${({ theme }) => theme.color.navyBlue};
    }

    .notfound .notfound-404 h1 > span {
        display: inline-block;

        width: 150px;
        height: 150px;
        background-image: url(${owsiak});
        background-size: cover;
        transform: scale(1.4);
        z-index: -1;
    }

    .notfound h2 {
        font-family: 'Montserrat', sans-serif;
        font-size: 60px;
        font-weight: 700;
        margin-top: 120px;
        text-transform: uppercase;
        color: ${({ theme }) => theme.color.mediumRed};
    }

    .notfound p {
        font-family: 'Montserrat', sans-serif;
        color: ${({ theme }) => theme.color.navyBlue};
        margin-top: 10px;
        font-weight: 300;
    }

    @media only screen and (max-width: 520px) {
        .notfound .notfound-404 {
            height: 115px;
        }
        .notfound .notfound-404 h1 {
            font-size: 110px;
        }

        .notfound h2 {
            font-size: 30px;
            margin-top: 30px;
            padding: 10px;
        }

        .notfound p {
            padding-left: 20px;
            padding-right: 20px;
        }

        .notfound .notfound-404 h1 > span {
            width: 96px;
            height: 96px;
        }
    }
`;

export default PageNotFound;
