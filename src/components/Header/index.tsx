import Link from 'next/link';

import { Box, Icon, Image, Link as ChakraLink } from '@chakra-ui/react';
import { MdChevronLeft } from 'react-icons/md';

import { Wrapper } from '../Wrapper';

type HeaderProps = {
  goBackHref?: string;
};

export function Header({ goBackHref = null }: HeaderProps) {
  return (
    <Wrapper
      as="header"
      bg="gray.50"
      h={[50, 100]}
      align="center"
      justify={goBackHref ? 'space-between' : 'center'}
    >
      {!!goBackHref && (
        <Link href={goBackHref} passHref>
          <ChakraLink w={['4', '8']} h={['4', '8']} display="flex">
            <Icon as={MdChevronLeft} fontSize={['16', '32']} />
          </ChakraLink>
        </Link>
      )}

      <Image src="images/logo.svg" alt="World Trip" w={['80px', 'auto']} />

      {!!goBackHref && <Box w={['4', '8']} h={['4', '8']} />}
    </Wrapper>
  );
}
