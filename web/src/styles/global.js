import { createGlobalStyle } from 'styled-components';
import media from 'styled-query';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  :root {
    --white: #fff;
    --background: #F2F3F5;
    --gray-line: #DCDDE0;
    --text: #666666;
    --text-highlight: #B3B9FF;
    --title: #2E384D;
    --red: #E83F5B;
    --green: #4CD62B;
    --blue: #5965E0;
    --blue-dark: #4953B8;
    --blue-twitter: #2aa9E0;
  }

  html {
    ${media.lessThan('1080px')`
      font-size: 93.75%;
      // default: 16px
      // 16 x 0.9375 = 15px
    `}
    ${media.lessThan('720px')`
      font-size: 87.5%;
    `}
  }

  body {
    background: var(--background);
    color: var(--text);
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, textarea, button {
    font: 400 16px 'Inter', sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
  
`;