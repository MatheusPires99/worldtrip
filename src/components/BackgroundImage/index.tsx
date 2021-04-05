import { ReactNode } from 'react';

import { Box } from '@chakra-ui/react';

type BackgroundImageProps = {
  image: string;
  children: ReactNode;
};

export function BackgroundImage({ image, children }: BackgroundImageProps) {
  return (
    <Box
      bgImage={`url(${image})`}
      bgRepeat="no-repeat"
      bgSize="100%"
      bgPosition="center"
    >
      {children}
    </Box>
  );
}
