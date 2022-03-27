import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      black: string;
      darkGrey: string;
      error: string;
      lightGrey: string;
      primary: string;
      secondary: string;
      transparent: string;
      white: string;
    };
    breakpoints: {
      medium: string;
    };
  }
}
