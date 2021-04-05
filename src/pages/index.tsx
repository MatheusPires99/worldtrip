import { GetStaticProps } from 'next';

import { Box } from '@chakra-ui/react';

import { api } from '../services';
import { Continent } from '../types';
import {
  Header,
  HomeBanner,
  TravelTypes,
  ContinentsCarousel,
} from '../components';

type HomeProps = {
  continents: Continent[];
};

export default function Home({ continents }: HomeProps) {
  return (
    <Box pb="20">
      <Header />
      <HomeBanner />
      <TravelTypes />
      <ContinentsCarousel continents={continents} />
    </Box>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await api.get('/continents');

  const continents = response.data;

  return {
    props: {
      continents,
    },
  };
};
