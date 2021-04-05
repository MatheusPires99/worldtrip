import { ReactNode } from 'react';

import { Flex, FlexProps as ChakraFlexProps } from '@chakra-ui/react';

type ContainerProps = ChakraFlexProps & {
  children: ReactNode;
};

export function Container({ children, ...rest }: ContainerProps) {
  return (
    <Flex w="100%" maxWidth={1160} mx="auto" {...rest}>
      {children}
    </Flex>
  );
}
