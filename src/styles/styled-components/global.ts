import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: 'Roboto', sans-serif;
}

body {
    background-color: #fff;
    color: #222222;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

body, input, button {
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
}

html, body, #root {
    min-height: 100%;
}

h1, h2, h3, h4, h5, h6, strong {
  font-weight: 500
}

button {
  cursor: pointer;
}
`;
