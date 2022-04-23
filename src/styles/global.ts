import { Font } from "./../model/enums/theme-fonts";
import { Color } from "./../model/enums/theme-colors";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html, body, div, p, ul, li, header, footer, main, section, aside, form, nav, input, button, figure, figcaption, a, h1, h2, h3, h4, h5, h6 {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style-type: none;
        text-decoration: none;
    }

    body {
        background: rgb(107, 204, 200);
        background: linear-gradient(
        180deg,
        rgba(107, 204, 200, 1) 0%,
        rgba(78, 146, 185, 1) 50%,
        rgba(32, 75, 136, 1) 100%
        );
        min-height: 100vh;
        color: ${Color.TEXT_MAIN};

        &::-webkit-scrollbar {
            width: 16px;
        }

        &::-webkit-scrollbar-track {
            background-color: #2a2a2a;
        }

        &::-webkit-scrollbar-thumb {
            background-color: ${Color.MAIN_DARK};

            &:hover {
                background-color: ${Color.MAIN};
            }
        }

    }

    body, button, a {
        font-family: ${Font.MAIN};
    }

    button {
        cursor: pointer;
    }

    input, a {
        outline: none;
    }

    .container {
        border-radius: 15px;
        width: 768px;
        margin: 10px auto;
        box-shadow: 0 0 0.4em black;
    }
`;
