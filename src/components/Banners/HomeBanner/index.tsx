import { Flex, Heading, Image, Text } from '@chakra-ui/react';

import { Wrapper, BackgroundImage } from '../..';

export function HomeBanner() {
  return (
    <BackgroundImage image="/images/sky_background.png">
      <Wrapper h={335} align="center" justify="space-between">
        <Flex flexDir="column" maxWidth={524}>
          <Heading color="gray.50" fontWeight="medium">
            5 Continentes, <br /> infinitas possibilidades.
          </Heading>
          <Text color="gray.200" mt="5" size="md">
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Flex>

        <Image src="/images/airplane.svg" alt="Airplane" mt="32" />
      </Wrapper>
    </BackgroundImage>
  );
}
