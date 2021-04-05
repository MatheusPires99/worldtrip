import React from 'react';
import Link from 'next/link';

import { Flex, Heading, Text, Link as ChakraLink } from '@chakra-ui/react';

import { BackgroundImage } from '../../BackgroundImage';

interface CarouselItemProps {
  image: string;
  title: string;
  subtitle: string;
  href: string;
}

export const CarouselItem = ({
  href,
  image,
  title,
  subtitle,
}: CarouselItemProps) => {
  return (
    <BackgroundImage image={image} height={450}>
      <Link href={href} passHref>
        <ChakraLink w="100%" h="100%" _hover={{}}>
          <Flex
            flexDir="column"
            justify="center"
            align="center"
            w="100%"
            h="100%"
          >
            <Heading
              color="gray.50"
              fontSize={['xl', '3xl', '5xl']}
              fontWeight="bold"
            >
              {title}
            </Heading>
            <Text
              mt="1rem"
              color="gray.200"
              fontWeight="bold"
              fontSize={['md', 'lg', 'xl', '1xl']}
            >
              {subtitle}
            </Text>
          </Flex>
        </ChakraLink>
      </Link>
    </BackgroundImage>
  );
};
