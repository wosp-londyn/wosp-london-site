import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after{
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-size: 1.4rem;

    }

    html {
        font-size: 62.5%;
        margin:0; 
        padding:0;
        scroll-behavior: smooth;
        background: #313857;
    }
    
    body {
        margin: 0;
        padding: 0;
    }
    
`;

export default GlobalStyle;
