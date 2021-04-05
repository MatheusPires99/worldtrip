import React from 'react';

import SwiperCore, { Pagination, Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Box } from '@chakra-ui/react';

import { Continent } from '../../../types';
import { CarouselItem } from '../CarouselItem';

SwiperCore.use([Navigation, Pagination, Autoplay]);

type CarouselProps = {
  continents: Continent[];
};

export function Carousel({ continents }: CarouselProps) {
  return (
    <Box width="100%" h={450}>
      <Swiper slidesPerView={1} navigation pagination autoplay>
        {continents.map(continent => (
          <SwiperSlide key={continent.id}>
            <CarouselItem
              image={continent.bannerImage}
              title={continent.name}
              subtitle={continent.text}
              href={`/continent/${continent.id}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
