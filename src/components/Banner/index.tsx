import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';

import { Container } from '../Container';

export function Banner() {
  return (
    <Box
      bgImage="url('/images/sky_background.png')"
      bgRepeat="no-repeat"
      bgSize="100%"
    >
      <Container h={335} align="center" justify="space-between">
        <Flex flexDir="column" maxWidth={524}>
          <Heading color="gray.50" fontWeight="medium">
            5 Continentes, <br /> infinitas possibilidades.
          </Heading>
          <Text color="gray.200" mt="5" size="md">
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Flex>

        <Image src="/images/airplane.svg" alt="Airplane" mt="32" />
      </Container>
    </Box>
  );
}
