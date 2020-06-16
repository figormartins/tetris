import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    margin: 0;
  }
  @font-face {
    font-family: 'Pixel';
    src: url('../fonts/Pixel-LCD-7.woff') format('woff');
  }
`