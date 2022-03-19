import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        align-items: center;
        display: flex;
        flex-direction: column;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
        height: 100vh;
        justify-content: center;
        margin: 0;
        margin: 0;
        transition: all 0.50s linear;
        width: 100%;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
    }

    h1 {
        font-family: Roboto;
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        letter-spacing: 0em;
        line-height: 28px;
        text-align: left;
    }
`;
