'use client';
import imgs from '@/app/utils/Images';
import { Image } from '@chakra-ui/next-js';
import { Box, Container, Heading, SimpleGrid } from '@chakra-ui/react';
import React from 'react';

const Players = () => {
  return (
    <Container
      maxW='5xl'
      p={{ base: 4, sm: 10 }}
      id='players'
      color={'white'}
      minHeight={'100vh'}
      scrollBehavior={'smooth'}
    >
      <Heading mb={4}>Takım & Oyuncular</Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3, xl: 4 }} gap={4}>
        {imgs.map((img) => (
          <Box className='center-flex' key={img.src}>
            <Image
              cursor={'pointer'}
              rounded={'md'}
              src={img}
              w={{ base: '100%' }}
              alt='photo'
            />
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Players;
