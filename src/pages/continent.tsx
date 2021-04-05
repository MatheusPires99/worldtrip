import { Box } from '@chakra-ui/react';

import {
  Header,
  ContinentBanner,
  ContinentAbout,
  Gallery,
} from '../components';

export default function Continent() {
  return (
    <Box pb="20">
      <Header goBackHref="/" />
      <ContinentBanner />
      <ContinentAbout />
      <Gallery />
    </Box>
  );
}
