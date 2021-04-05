import { GetStaticPaths, GetStaticProps } from 'next';

import { Box } from '@chakra-ui/react';

import {
  Header,
  ContinentBanner,
  ContinentAbout,
  Gallery,
} from '../../components';
import { api } from '../../services';
import { Continent as ContinentType } from '../../types';

type ContinentProps = {
  continent: ContinentType;
};

export default function Continent({ continent }: ContinentProps) {
  return (
    <Box pb="20">
      <Header goBackHref="/" />
      <ContinentBanner
        image={continent.bannerImage}
        continentName={continent.name}
      />
      <ContinentAbout
        text={continent.text}
        countries={continent.countries}
        languages={continent.languages}
        cities100={continent.cities100}
      />
      <Gallery cities={continent.cities} />
    </Box>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { continent: continentParam } = params;

  const response = await api.get(`/continents/${continentParam}`);

  const continent = response.data;

  return {
    props: {
      continent,
    },
  };
};
