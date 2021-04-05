import { Flex, Text } from '@chakra-ui/react';

import { Info as InfoProps } from '..';

export function Info({ countries, languages, cities100 }: InfoProps) {
  return (
    <Flex align="center" justify="space-between">
      <Flex flexDir="column" align={['flex-start', 'center']}>
        <Text
          color="yellow.300"
          fontWeight="semibold"
          fontSize={['2xl', '5xl']}
        >
          {countries}
        </Text>
        <Text fontWeight={['medium', 'semibold']} fontSize={['md', '2xl']}>
          países
        </Text>
      </Flex>
      <Flex flexDir="column" align={['flex-start', 'center']}>
        <Text
          color="yellow.300"
          fontWeight="semibold"
          fontSize={['2xl', '5xl']}
        >
          {languages}
        </Text>
        <Text fontWeight={['medium', 'semibold']} fontSize={['md', '2xl']}>
          línguas
        </Text>
      </Flex>
      <Flex flexDir="column" align={['flex-start', 'center']}>
        <Text
          color="yellow.300"
          fontWeight="semibold"
          fontSize={['2xl', '5xl']}
        >
          {cities100}
        </Text>
        <Text fontWeight={['medium', 'semibold']} fontSize={['md', '2xl']}>
          cidades +100
        </Text>
      </Flex>
    </Flex>
  );
}
