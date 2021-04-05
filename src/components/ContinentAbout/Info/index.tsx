import { Flex, Text } from '@chakra-ui/react';

export function Info() {
  return (
    <Flex align="center" justify="space-between">
      <Flex flexDir="column" align="center">
        <Text color="yellow.300" fontWeight="semibold" fontSize="5xl">
          50
        </Text>
        <Text fontWeight="semibold" fontSize="2xl">
          países
        </Text>
      </Flex>
      <Flex flexDir="column" align="center">
        <Text color="yellow.300" fontWeight="semibold" fontSize="5xl">
          60
        </Text>
        <Text fontWeight="semibold" fontSize="2xl">
          línguas
        </Text>
      </Flex>
      <Flex flexDir="column" align="center">
        <Text color="yellow.300" fontWeight="semibold" fontSize="5xl">
          27
        </Text>
        <Text fontWeight="semibold" fontSize="2xl">
          cidades +100
        </Text>
      </Flex>
    </Flex>
  );
}
