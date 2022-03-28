import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      black: string;
      darkGrey: string;
      error: string;
      grey: string;
      lightGrey: string;
      primary: string;
      secondary: string;
      transparent: string;
      white: string;
    };
    breakpoints: {
      large_desktop: string;
      phone: string;
      small_desktop: string;
      tablet: string;
    };
  }
}
