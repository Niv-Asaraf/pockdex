
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      white: string;
      black: string;
      green: string;
      darkBlue: string;
      lightGray: string;
      hoverGreen: string;
      lightBlue: string;
      hoverBlue: string;
      typeColors: {
        [key: string]: string;
      };
    };
    breakpoints: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
  }
}
