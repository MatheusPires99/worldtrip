import { SimpleGrid, Text } from '@chakra-ui/react';

import { Wrapper } from '../Wrapper';
import { Info } from './Info';

export type Info = {
  countries: number;
  languages: number;
  cities100: number;
};

type ContinentAboutProps = Info & {
  text: string;
};

export function ContinentAbout({
  text,
  countries,
  languages,
  cities100,
}: ContinentAboutProps) {
  return (
    <Wrapper my={['6', '20']}>
      <SimpleGrid align="center" gap={['4', '14']} minChildWidth={[null, 500]}>
        <Text textAlign="left" fontSize={['sm', '2xl']}>
          {text}
        </Text>

        <Info
          countries={countries}
          languages={languages}
          cities100={cities100}
        />
      </SimpleGrid>
    </Wrapper>
  );
}
