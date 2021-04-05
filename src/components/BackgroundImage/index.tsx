import { ReactNode } from 'react';

import { Box } from '@chakra-ui/react';

type BackgroundImageProps = {
  image: string;
  height?: number | string;
  children: ReactNode;
};

export function BackgroundImage({
  image,
  height = 'auto',
  children,
}: BackgroundImageProps) {
  return (
    <Box
      bgImage={`url(${image})`}
      bgRepeat="no-repeat"
      bgSize={['auto', '100%']}
      bgPosition="center"
      h={[155, height]}
    >
      {children}
    </Box>
  );
}
