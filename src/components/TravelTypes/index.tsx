import { Box, Wrap, Divider } from '@chakra-ui/react';

import { TRAVEL_TYPES } from '../../constants';
import { Wrapper } from '../Wrapper';
import { Item } from './Item';

export function TravelTypes() {
  return (
    <Wrapper flexDir="column">
      <Wrap
        align="center"
        justify={['center', 'space-between']}
        py={['9', '28']}
      >
        {TRAVEL_TYPES.map(type => (
          <Item key={type.name} name={type.name} image={type.image} />
        ))}
      </Wrap>

      <Box alignSelf="center" w={['60px', '90px']}>
        <Divider color="teal" size="4rem" borderColor="teal.800" />
      </Box>
    </Wrapper>
  );
}
