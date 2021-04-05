import { Box, Flex, Image, Text } from '@chakra-ui/react';

import { TRAVEL_TYPES } from '../../constants';
import { Wrapper } from '../Wrapper';

export function TravelTypes() {
  return (
    <Wrapper flexDir="column">
      <Flex align="center" justify="space-between" py="28">
        {TRAVEL_TYPES.map(type => (
          <Flex key={type.name} flexDir="column" align="center">
            <Image src={type.image} alt={type.name} />
            <Text mt="6" fontWeight="semibold" fontSize="2xl">
              {type.name}
            </Text>
          </Flex>
        ))}
      </Flex>

      <Box alignSelf="center" w={90} height="2px" bg="teal.800" />
    </Wrapper>
  );
}
