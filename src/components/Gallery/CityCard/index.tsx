import { Flex, Image, Text } from '@chakra-ui/react';

export function CityCard() {
  return (
    <Flex flexDir="column">
      <Image
        src="https://images.unsplash.com/photo-1519677100203-a0e668c92439?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
        alt=""
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
            Londres
          </Text>
          <Text mt="3" fontWeight="medium" color="gray.400">
            Reino Unido
          </Text>
        </Flex>

        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Flag_of_the_United_Kingdom_%282-3%29.svg/1280px-Flag_of_the_United_Kingdom_%282-3%29.svg.png"
          alt=""
          objectFit="cover"
          borderRadius="full"
          boxSize="8"
        />
      </Flex>
    </Flex>
  );
}
