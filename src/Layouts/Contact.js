import React from 'react';
import { Helmet } from 'react-helmet';
import PageTemplate from '../Templates/PageTemplate';

const Contact = () => {
    return (
        <>
            <Helmet>
                <title>WOŚP Londyn - Kontakt</title>
                <meta
                    name="description"
                    content="WOŚP Londyn - Kontakt. Napisz do nas! - Gramy do końca świata i o jeden dzień dłużej!"
                />
                <meta
                    name="keywords"
                    content="WOŚP, WOŚP 2020, WOŚP Londyn, WOŚP Anglia, WOŚP Wielka Brytania, zbiórka pieniędzy Londyn, WOŚP London, WOŚP Great Britain, WOŚP England, WOŚP kontakt, WOŚP contact, WOŚP Londyn kontakt, WOŚP London contact, WOŚP e-mail, WOŚP Londyn e-mail"
                />
            </Helmet>
            <PageTemplate slug="kontakt" />
        </>
    );
};

export default Contact;
