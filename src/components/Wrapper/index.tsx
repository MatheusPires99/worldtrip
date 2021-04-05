import { ReactNode } from 'react';

import { Flex, FlexProps as ChakraFlexProps } from '@chakra-ui/react';

type WrapperProps = ChakraFlexProps & {
  children: ReactNode;
};

export function Wrapper({ children, ...rest }: WrapperProps) {
  return (
    <Flex w="100%" maxWidth={1160} mx="auto" {...rest}>
      {children}
    </Flex>
  );
}
