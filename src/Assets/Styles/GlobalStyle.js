import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after{
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        padding:0;
        margin: 0;
    }

    html {
        /* font-size: 62.5%; */
        margin:0; 
        padding:0;
        scroll-behavior: smooth;
        background: ${({ theme }) => theme.color.bg1};
    }
    
    body {
        margin: 0;
        padding: 0;
    }
    
`;

export default GlobalStyle;
