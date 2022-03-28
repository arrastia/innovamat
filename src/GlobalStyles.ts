import { createGlobalStyle } from 'styled-components';

import { RobotoBlack, RobotoBold, RobotoLight, RobotoMedium, RobotoRegular, RobotoThin } from 'assets/fonts';

export const GlobalStyles = createGlobalStyle`
    @font-face {
      font-family: 'Roboto-thin';
      font-weight: 100;
      src: local('Roboto-thin'), url(${RobotoThin}) format('truetype');
    }

    @font-face {
      font-family: 'Roboto-light';
      font-weight: 300;
      src: local('Roboto-light'), url(${RobotoLight}) format('truetype');
    }

    @font-face {
      font-family: 'Roboto';
      font-weight: 400;
      src: local('Roboto'), url(${RobotoRegular}) format('truetype');
    }

    @font-face {
      font-family: 'Roboto-medium';
      font-weight: 500;
      src: local('Roboto-medium'), url(${RobotoMedium}) format('truetype');
    }

    @font-face {
      font-family: 'Roboto-bold';
      font-weight: 700;
      src: local('Roboto-bold'), url(${RobotoBold}) format('truetype');
    }

    @font-face {
      font-family: 'Roboto-black';
      font-weight: 900;
      src: local('Roboto-black'), url(${RobotoBlack}) format('truetype');
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      align-items: center;
      display: flex;
      flex-direction: column;
      font-family: 'Roboto', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
      height: 100vh;
      justify-content: center;
      margin: 0;
      margin: 0;
      width: 100%;
      -moz-osx-font-smoothing: grayscale;
      -webkit-font-smoothing: antialiased;
    }

    code {
      font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
    }

    h1 {
      display: block;
      font-size: 2em;
      font-weight: bold;
      margin-block-end: 0.67em;
      margin-block-start: 0.67em;
      margin-inline-end: 0px;
      margin-inline-start: 0px;
    }

    h2 {
      font-family: 'Roboto-bold';
      font-size: 24px;
      font-style: normal;
      letter-spacing: 0em;
      line-height: 28px;
      text-align: left;
    }

    h3 {
      font-family: 'Roboto-bold';
      font-size: 20px;
      font-style: normal;
      letter-spacing: 0em;
      line-height: 23px;
      text-align: left;
    }

    h4 {      
      font-family: 'Roboto';
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      letter-spacing: 0em;
      line-height: 19px;
      text-align: left;
    }

    p {
      line-height: 22px;
      margin: 0 0 25px 0;
    }
`;
