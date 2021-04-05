import { Flex, Image, Text, Box } from '@chakra-ui/react';
import { CircleFlag } from 'react-circle-flags';

type CityCardProps = {
  name: string;
  image: string;
  country: string;
  countryCode: string;
};

export function CityCard({ name, image, country, countryCode }: CityCardProps) {
  return (
    <Flex flexDir="column">
      <Image
        src={image}
        alt={name}
        h={173}
        objectFit="cover"
        borderTopRightRadius="4"
        borderTopLeftRadius="4"
      />

      <Flex
        align="center"
        justify="space-between"
        bg="white"
        p="6"
        border="1px"
        borderColor="yellow.300"
        borderTop="0"
        borderBottomRightRadius="4"
        borderBottomLeftRadius="4"
      >
        <Flex flexDir="column" align="flex-start">
          <Text fontWeight="semibold" fontSize="xl">
            {name}
          </Text>
          <Text mt="3" fontWeight="medium" color="gray.400">
            {country}
          </Text>
        </Flex>

        <Box w="8" h="8">
          <CircleFlag countryCode={countryCode} />
        </Box>
      </Flex>
    </Flex>
  );
}
