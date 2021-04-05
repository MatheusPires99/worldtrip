import React from 'react';

import SwiperCore, { Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Box } from '@chakra-ui/react';

import { CarouselItem } from '../CarouselItem';
import { CONTINENTS } from '../../../constants';

SwiperCore.use([Navigation, Pagination]);

export function Carousel() {
  return (
    <Box width="100%" h={450}>
      <Swiper slidesPerView={1} navigation pagination>
        {CONTINENTS.map(continent => (
          <SwiperSlide key={continent.id}>
            <CarouselItem
              image={continent.bannerImage}
              title={continent.name}
              subtitle={continent.text}
              href={`/${continent.id}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
