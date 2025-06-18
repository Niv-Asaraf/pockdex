
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      white: string;
      black: string;
      green: string;
      darkBlue: string;
      LightGray: string;
      hoverGreen: string;
      LightBlue: string;
      hoverBlue: string;
      typeColors: {
        [key: string]: string;
      };
      // navButtonColors: {
      //   active: { bg: string; text: string };
      //   hover: { bg: string; text: string };
      //   default: { bg: string; text: string };
      // };
    };
    breakpoints: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
  }
}
