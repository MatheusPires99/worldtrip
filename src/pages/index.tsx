import { Box } from '@chakra-ui/react';

import {
  Header,
  HomeBanner,
  TravelTypes,
  ContinentsCarousel,
} from '../components';

export default function Home() {
  return (
    <Box pb="20">
      <Header />
      <HomeBanner />
      <TravelTypes />
      <ContinentsCarousel />
    </Box>
  );
}
