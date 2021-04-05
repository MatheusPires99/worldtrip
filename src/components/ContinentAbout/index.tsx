import { SimpleGrid, Text } from '@chakra-ui/react';

import { Wrapper } from '../Wrapper';
import { Info } from './Info';

export function ContinentAbout() {
  return (
    <Wrapper my="20">
      <SimpleGrid align="center" gap="14" minChildWidth={500}>
        <Text textAlign="left" fontSize="2xl">
          A Europa é, por convenção, um dos seis continentes do mundo.
          Compreendendo a península ocidental da Eurásia, a Europa geralmente
          divide-se da Ásia a leste pela divisória de águas dos montes Urais, o
          rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
        </Text>

        <Info />
      </SimpleGrid>
    </Wrapper>
  );
}
