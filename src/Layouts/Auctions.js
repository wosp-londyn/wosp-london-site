import React from 'react';
import { Helmet } from 'react-helmet';

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
            <div style={{ fontSize: '17px' }}>
                <p>
                    Aukcje pojawią się już nie długo! <br />
                    Śledźcie uważnie nasze kanały komunikacji: <br />
                    Facebook, Instagram i wszędzie gdzie jeszcze uda się wam nas
                    znaleźć!
                </p>
                <p>
                    Gramy do końca świata i jeden dzień dłużej!
                    <br />
                    Sie ma!
                </p>
            </div>
        </>
    );
};

export default Auctions;
