import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-size: 62.5%;
    }

    body {
        background-color: black;
    }
`;

export default GlobalStyle;