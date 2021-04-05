import { Box, Flex, Image, Text, useBreakpointValue } from '@chakra-ui/react';

type TypeProps = {
  name: string;
  image: string;
};

export function Type({ name, image }: TypeProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex flexDir={['row', 'column']} align="center">
      {isWideVersion ? (
        <Image src={image} alt={name} mb="6" />
      ) : (
        <Box w="2" h="2" borderRadius="full" bg="yellow.300" mr="2" />
      )}

      <Text fontSize={['lg', '2xl']} fontWeight={['medium', 'semibold']}>
        {name}
      </Text>
    </Flex>
  );
}
