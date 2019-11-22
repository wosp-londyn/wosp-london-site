const theme = {
    color: {
        white: '#FFFFFF',
        black: '#000000',
        bg1: '#F5F5F5',
        bg2: '#EEE',
        yellow: '#FAB400',
        blue: '#009FE3',
        green: '#96C11F',
        red: '#E30613',
        orange: '#EE7003',
        navyBlue: '#212851',
        facebook: '#3b5998',

        rgb: {
            white: '255,255,255',
            black: '0,0,0',
        },
    },

    font: {
        family: {
            lato: '"Lato", sans-serif',
            raleway: '"Roboto", sans-serif',
        },
        weight: {
            700: '700',
            400: '400',
        },
    },

    media: {
        above: {
            xl: '@media (min-width: 1200px)',
            lg: '@media (min-width: 992px)',
            md: '@media (min-width: 768px)',
            sm: '@media (min-width: 576px)',
            xs: '@media (min-width: 320px)',
        },

        below: {
            xl: '@media (max-width: 1200px)',
            lg: '@media (max-width: 992px)',
            md: '@media (max-width: 768px)',
            sm: '@media (max-width: 576px)',
            xs: '@media (max-width: 320px)',
        },
    },
};

export default theme;
