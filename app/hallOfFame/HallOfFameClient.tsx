'use client';
import { Container, Heading } from '@chakra-ui/react';
import React from 'react';
import HallOfFamerList from './HallOfFamerList';
import { Player } from '@prisma/client';

interface IHallOfFameClientProps {
  hallOfFamers: Player[];
}

const HallOfFameClient = ({ hallOfFamers }: IHallOfFameClientProps) => {
  return (
    <Container maxW={'7xl'} p={{ base: 6, md: 10 }}>
      <Heading color={'white'}>
        <span className='fancy'>SKINS FC</span> Hall of Fame
      </Heading>
      <HallOfFamerList hallOfFamers={hallOfFamers} />
    </Container>
  );
};

export default HallOfFameClient;
