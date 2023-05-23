'use client';
import * as React from 'react';
import {
  Container,
  Text,
  SimpleGrid,
  Box,
  chakra,
  Stack,
  HStack,
  Icon,
} from '@chakra-ui/react';
import { AiFillCheckCircle } from 'react-icons/ai';

interface StatData {
  label: string;
  score: string;
}

const statData: StatData[] = [
  {
    label: '30 Yenilgi',
    score: '35 Maç',
  },
  {
    label: 'Yatırılan Adamlar',
    score: '3',
  },
  {
    label: 'Atılan Gol',
    score: '40',
  },
  {
    label: 'Yenilen Gol',
    score: '110',
  },
];

const planList = [
  'Defans yatırma',
  'Oyun Kurma',
  'Pırt diye giden şutlar',
  'İptal olan maçlar',
  'GERİ GEL GERİ GERİ!',
];

const About = () => {
  return (
    <Container
      maxW='5xl'
      p={{ base: 4, sm: 10 }}
      id='about'
      color={'white'}
      height={'100vh'}
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <Stack
        direction={{ base: 'column', md: 'row' }}
        justifyContent='space-between'
      >
        <Stack spacing={4}>
          <chakra.h1 fontSize='2xl' lineHeight={1.2} fontWeight='bold'>
            Hakkımızda, Başarılarımız & Hedeflerimiz 🏆
          </chakra.h1>
          <Text fontSize='md' color='gray.400' maxW='480px'>
            SKINS Futbol kulübü, Papaz Çayırında Haxball oynayan 5 arkadaş
            tarafından 2017 yılında kurulmuş olup, 2022 yılından beri Hayrola
            3.Lig&apos;de mücadele etmektedir.
          </Text>
          <Text fontSize='md' color='gray.400' maxW='480px'>
            Oynadıkları maçlarda akıl almaz klas hareketler sergileyen Skins,
            mücadelesine Hayrola ve Gümüşpala stadlarında devam etmektedir.
          </Text>
          <Stack spacing={2}>
            <Text fontSize='md' color='gray.400'>
              <span className='fancy'>SKINS</span> Futbol Kulübü olarak
              hedeflerimiz:
            </Text>
            {planList.map((data, index) => (
              <HStack key={index} alignItems='center' spacing={1} fontSize='md'>
                <Icon as={AiFillCheckCircle} w={4} h={4} color='white' />
                <Text fontSize='md' color='gray.400'>
                  {data}
                </Text>
              </HStack>
            ))}
          </Stack>
        </Stack>
        <Stack>
          <SimpleGrid
            columns={2}
            spacing={5}
            pt={8}
            pl={{ base: 0, md: 10 }}
            margin='auto 0'
          >
            {statData.map((data, index) => (
              <Stack
                key={index}
                pl={3}
                py={1}
                pr={1}
                borderLeft='2px solid'
                borderLeftColor='black'
                justifyContent='space-between'
              >
                <Box fontSize='2xl' fontWeight='bold' color='white'>
                  {data.score}
                </Box>
                <Text fontSize='md'>{data.label}</Text>
              </Stack>
            ))}
          </SimpleGrid>
        </Stack>
      </Stack>
    </Container>
  );
};

export default About;
