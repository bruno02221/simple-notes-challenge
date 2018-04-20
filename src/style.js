import "normalize.css";
import { injectGlobal, css } from "styled-components";

const theme = css`
  @import url("https://fonts.googleapis.com/css?family=Roboto+Condensed:300,400");

  :root {
    --font-sans-serif: "Roboto Condensed", sans-serif;
    --font-size: 14px;
    --font-weight: 300;
    --color-black: #000;
    --color-white: #fff;
    --color-gray: #6a6a6c;
    --color-gray-light: #a2a6af;
    --color-gray-lighter: #cbcfd2;
    --color-gray-lightest: #f5f9fc;
    --border-radius: 8px;
  }
`;

injectGlobal`
  ${theme};

  html,
  body {
    font-size: var(--font-size);
    font-family: var(--font-sans-serif);
    font-weight: var(--font-weight);
    color: var(--color-black);
    height: 100%;
  }

  *, h1, h2, h3 {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: inherit;
    font-size: inherit;
    font-family: inherit;
    font-weight: inherit;
  }

  #root {
    background: var(--color-gray-lightest);
    min-height: 100vh;
  }
`;
