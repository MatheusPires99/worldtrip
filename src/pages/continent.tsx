import { Box } from '@chakra-ui/react';

import { Header, ContinentBanner, ContinentAbout } from '../components';

export default function Continent() {
  return (
    <Box>
      <Header goBackHref="/" />
      <ContinentBanner />
      <ContinentAbout />
    </Box>
  );
}
