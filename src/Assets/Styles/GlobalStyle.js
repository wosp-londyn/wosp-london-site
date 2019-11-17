import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after,h1,h2,h3,h4,h5,h6{
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        padding:0;
        margin: 0;
        font-family: ${({ theme }) => theme.font.family.lato} !important;
        font-weight: 400;
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
        
        #root{
            background: ${({ theme }) => theme.color.bg1};
            
        }
    }
    
`;

export default GlobalStyle;
