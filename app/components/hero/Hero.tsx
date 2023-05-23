'use client';
import React from 'react';
import {
  Container,
  chakra,
  Stack,
  Text,
  Button,
  Box,
  Link,
} from '@chakra-ui/react';

const Hero = () => {
  return (
    <Container p={{ base: 8, sm: 14 }} height={'100vh'}>
      <Stack direction='column' spacing={6} alignItems='center'>
        <Box
          py={2}
          px={3}
          bg='#343a40'
          w='max-content'
          color='white'
          rounded='md'
          fontSize='sm'
        >
          <Stack direction={{ base: 'column', sm: 'row' }}>
            <Text fontWeight='bold'>Ortaaa, Şut, Aut! ⚽️</Text>
            <Text>SKINS FC&apos;ye hoş geldiniz</Text>
          </Stack>
        </Box>
        <chakra.h1
          fontSize={{ base: '4xl', sm: '5xl' }}
          fontWeight='bold'
          textAlign='center'
          maxW='600px'
          color='white'
        >
          4 SKINS{' '}
          <chakra.span bg='linear-gradient(transparent 50%, #495057 50%)'>
            Kazanamayanlar Kulübü
            {/* Power Within, Ready to Win */}
          </chakra.span>
        </chakra.h1>
        <Text maxW='550px' fontSize='xl' textAlign='center' color='white'>
          SKINS Futbol kulübü, Papaz Çayırında Haxball oynayan 5 arkadaş
          tarafından 2017 yılında kurulmuş olup, 2022 yılından beri Hayrola
          3.Lig&apos;de mücadele etmektedir.
        </Text>
        <Stack
          direction={{ base: 'column', sm: 'row' }}
          w={{ base: '100%', sm: 'auto' }}
          spacing={5}
        >
          <Button rounded='sm' size='lg' height='3.5rem' fontSize='1.2rem'>
            <Link href={'#about'}>Hakkımızda</Link>
          </Button>
          <Button
            variant='outline'
            rounded='sm'
            size='lg'
            height='3.5rem'
            fontSize='1.2rem'
            color={'white'}
            _hover={{
              bg: '#343a40',
            }}
          >
            <Link href={'#players'}>Oyuncular</Link>
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Hero;
