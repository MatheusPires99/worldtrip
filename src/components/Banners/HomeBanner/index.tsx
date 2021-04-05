import {
  Flex,
  Heading,
  Image,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';

import { Wrapper, BackgroundImage } from '../..';

export function HomeBanner() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <BackgroundImage image="/images/sky_background.png">
      <Wrapper h={['100%', 335]} align="center" justify="space-between">
        <Flex flexDir="column" maxWidth={['unset', 524]}>
          <Heading color="gray.50" fontWeight="medium" fontSize={['xl', '4xl']}>
            5 Continentes, <br /> infinitas possibilidades.
          </Heading>
          <Text color="gray.200" mt="5" fontSize={['sm', 'xl']}>
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Flex>

        {isWideVersion && (
          <Image src="/images/airplane.svg" alt="Airplane" mt="32" />
        )}
      </Wrapper>
    </BackgroundImage>
  );
}
