import { Box, Wrap } from '@chakra-ui/react';

import { TRAVEL_TYPES } from '../../constants';
import { Wrapper } from '../Wrapper';
import { Type } from './Type';

export function TravelTypes() {
  return (
    <Wrapper flexDir="column">
      <Wrap
        align="center"
        justify={['center', 'space-between']}
        py={['9', '28']}
      >
        {TRAVEL_TYPES.map(type => (
          <Type key={type.name} name={type.name} image={type.image} />
        ))}
      </Wrap>

      <Box
        alignSelf="center"
        w={['60px', '90px']}
        height={['1px', '2px']}
        bg="teal.800"
      />
    </Wrapper>
  );
}
