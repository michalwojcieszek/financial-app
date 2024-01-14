import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
/* COLORS https://yeun.github.io/open-color/*/
    /* Grey TEXT color */
    --color-grey-700: #212529;

    /* Blue */
    /* MAIN Color */
    --color-blue-700: #1c7ed6;
    --color-blue-500: #339af0;
    --color-blue-400: #4dabf7;
    --color-blue-000: #e7f5ff;

/* GRADIENTS */
    --gradient-default: linear-gradient(to left, #1c7ed6, #339af0);
    --gradient-hover: linear-gradient(to left, #339af0, #4dabf7);
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

  /* Creating animations for dark mode */
  transition: background-color 0.3s, border 0.3s;
}

html {
  font-size: 62.5%;
}

body {
  font-family: "Roboto", sans-serif;
  color: var(--color-grey-700);

  transition: color 0.3s, background-color 0.3s;
  min-height: 100vh;
  line-height: 1.5;
  font-size: 1.6rem;
}

input:focus,
button:focus,
textarea:focus,
select:focus {
  outline: 2px solid var(--color-blue-400);
  outline-offset: -1px;
}

`;
export default GlobalStyles;
