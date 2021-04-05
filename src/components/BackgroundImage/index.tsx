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
      bgSize={['auto', '100%']}
      bgPosition="center"
      h={[155, 'auto']}
    >
      {children}
    </Box>
  );
}
