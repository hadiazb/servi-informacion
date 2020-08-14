import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  ul {
    list-style: none;
  }
  button {
    background: transparent; 
    border: 0; 
    outline: 0;
  }
  body {
    height: 100vh;
    overscroll-behavior: none;
    font-family: Arial, Helvetica, sans-serif;
    width: 100%;
  }
  #app {
    overflow-x: hidden;
    min-height: 100vh;
  }
`;
