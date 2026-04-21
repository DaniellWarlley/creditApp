import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Neutra';
        src: url(/fonts/neutra.otf) format('opentype');
    }

    * {
        margin: 0;
        padding: 0;
        font-family: 'Neutra';
    }
    body{
        background-color: #121212;
    }
`