import Link from 'next/link';

import { Box, Flex, Icon, Image, Link as ChakraLink } from '@chakra-ui/react';
import { MdChevronLeft } from 'react-icons/md';

type HeaderProps = {
  goBackHref?: string;
};

export function Header({ goBackHref = null }: HeaderProps) {
  return (
    <Flex
      as="header"
      bg="gray.50"
      w="100%"
      maxWidth={1160}
      h={100}
      mx="auto"
      px="6"
      align="center"
      justify={goBackHref ? 'space-between' : 'center'}
    >
      {!!goBackHref && (
        <Link href={goBackHref} passHref>
          <ChakraLink w="8" h="8" display="flex">
            <Icon as={MdChevronLeft} fontSize="32" />
          </ChakraLink>
        </Link>
      )}

      <Image src="images/logo.svg" alt="World Trip" />

      {!!goBackHref && <Box w="8" h="8" />}
    </Flex>
  );
}
