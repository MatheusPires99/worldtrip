/* eslint-disable react/no-array-index-key */
import { Heading, SimpleGrid } from '@chakra-ui/react';

import { City } from '../../types';
import { Wrapper } from '../Wrapper';
import { CityCard } from './CityCard';

type GalleryProps = {
  cities: City[];
};

export function Gallery({ cities }: GalleryProps) {
  return (
    <Wrapper flexDir="column">
      <Heading mb={['5', '10']} fontWeight="medium" fontSize={['2xl', '4xl']}>
        Cidades +100
      </Heading>

      <SimpleGrid minChildWidth="242px" gap={['5', '12']} px={['5', '0']}>
        {cities.map(city => (
          <CityCard
            key={city.id}
            name={city.name}
            image={city.image}
            country={city.country}
            countryCode={city.code}
          />
        ))}
      </SimpleGrid>
    </Wrapper>
  );
}
