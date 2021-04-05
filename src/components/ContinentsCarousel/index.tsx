import { Heading } from '@chakra-ui/react';

import { Continent } from '../../types';
import { Wrapper } from '../Wrapper';
import { Carousel } from './Carousel';

type ContinentsCarouselProps = {
  continents: Continent[];
};

export function ContinentsCarousel({ continents }: ContinentsCarouselProps) {
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

      <Carousel continents={continents} />
    </Wrapper>
  );
}
