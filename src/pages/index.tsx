import { Box } from '@chakra-ui/react';

import { Header, Banner, TravelTypes } from '../components';

export default function Home() {
  return (
    <Box>
      <Header />
      <Banner />
      <TravelTypes />
    </Box>
  );
}
