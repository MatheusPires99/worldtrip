import { Heading } from '@chakra-ui/react';

import { Wrapper, BackgroundImage } from '../..';

export function ContinentBanner() {
  return (
    <BackgroundImage image="https://images.unsplash.com/photo-1519677100203-a0e668c92439?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80">
      <Wrapper h={500} align="flex-end">
        <Heading size="2xl" fontWeight="semibold" color="gray.50" mb="16">
          Europa
        </Heading>
      </Wrapper>
    </BackgroundImage>
  );
}
