import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    yellow: {
      '300': '#FFBA08',
    },
    gray: {
      '50': '#F5F8FA',
      '200': '#DADADA',
      '400': '#999999',
    },
    teal: {
      '800': '#47585B',
    },
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  styles: {
    global: {
      body: {
        backgroundColor: 'gray.50',
        color: 'teal.800',
      },
    },
  },
});
