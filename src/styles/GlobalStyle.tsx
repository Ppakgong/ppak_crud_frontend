import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        min-width: 100%;
        min-height: 100%;
    }

    body {
        width:100%;
        height: 100%;
    }
`;
