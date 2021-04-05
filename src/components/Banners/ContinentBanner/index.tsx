import { Heading } from '@chakra-ui/react';

import { Wrapper, BackgroundImage } from '../..';

type ContinentBannerProps = {
  image: string;
  continentName: string;
};

export function ContinentBanner({
  image,
  continentName,
}: ContinentBannerProps) {
  return (
    <BackgroundImage image={image}>
      <Wrapper
        h={['100%', 500]}
        align={['center', 'flex-end']}
        justify={['center', 'unset']}
      >
        <Heading
          size="2xl"
          fontWeight="semibold"
          color="gray.50"
          mb={[0, '16']}
        >
          {continentName}
        </Heading>
      </Wrapper>
    </BackgroundImage>
  );
}
