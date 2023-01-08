import { extendTheme } from '@chakra-ui/react';

import Heading from './components/heading';
import HeroLink from './components/heroLink';
import Link from './components/link';
import Text from './components/text';
import colors from './foundations/colors';
import fonts from './foundations/fonts';
import styles from './styles';

const theme = extendTheme({
  styles,
  colors,
  fonts,
  components: {
    Text,
    Heading,
    Link,
    HeroLink,
  },
});

export default theme;

// import { extendTheme, theme as base } from '@chakra-ui/react';
// import { mode } from '@chakra-ui/theme-tools';

// const overrides = {
//   initialColorMode: 'light',
//   useSystemColorMode: false,

//   styles: {
// global: (props) => ({
//   body: {
//     bg: mode('#fff', '#212121')(props),
//     color: mode("#000", "#fff")(props)
//   },
// }),
//   },

// colors: {
//   green_grass: {
//     100: "#4DB33B"
//   }
// },

// fonts: {
//   heading: `'Mohave', sans-serif, ${base.fonts?.heading}`,
//   body: `'Mohave', sans-serif, ${base.fonts?.body}`,
// },

//   breakpoints:{
//     sm: '320px',
//     md: '630px',
//     lg: '960px',
//     xl: '1200px',
//     '2xl': '1536px',
//   },

//   components:{
//     Text: {

//     }
//   }
// }

// const theme = extendTheme(overrides);

// export default theme;
