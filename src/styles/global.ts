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
        background-color: ${Color.MAIN_DARK};
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

`;