import { Box } from '@chakra-ui/react';

import { Header, HomeBanner, TravelTypes } from '../components';

export default function Home() {
  return (
    <Box>
      <Header />
      <HomeBanner />
      <TravelTypes />
    </Box>
  );
}
