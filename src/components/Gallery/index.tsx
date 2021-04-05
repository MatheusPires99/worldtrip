/* eslint-disable react/no-array-index-key */
import { Heading, SimpleGrid } from '@chakra-ui/react';

import { Wrapper } from '../Wrapper';
import { Card } from './Card';

export function Gallery() {
  return (
    <Wrapper flexDir="column">
      <Heading mb="10" fontWeight="medium">
        Cidades +100
      </Heading>

      <SimpleGrid minChildWidth="242px" gap="12">
        {Array.from(Array(5).keys()).map((_, index) => (
          <Card key={index} />
        ))}
      </SimpleGrid>
    </Wrapper>
  );
}
