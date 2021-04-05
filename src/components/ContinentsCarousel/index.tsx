import { Heading } from '@chakra-ui/react';

import { Wrapper } from '../Wrapper';
import { Carousel } from './Carousel';

export function ContinentsCarousel() {
  return (
    <Wrapper mt="14" justify="center" flexDir="column">
      <Heading
        textAlign="center"
        fontSize={['xl', '4xl']}
        fontWeight="medium"
        mb={['5', '14']}
      >
        Vamos nessa? <br /> Então escolha seu continente
      </Heading>

      <Carousel />
    </Wrapper>
  );
}