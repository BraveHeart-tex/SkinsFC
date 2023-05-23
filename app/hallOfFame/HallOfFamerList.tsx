'use client';
import { Box, Container, Heading, SimpleGrid, Stack } from '@chakra-ui/react';
import { Player } from '@prisma/client';
import React from 'react';
import HallOfFamerCard from './HallOfFamerCard';

interface IHallOfFamerListProps {
  hallOfFamers: Player[];
}

const HallOfFamerList = ({ hallOfFamers }: IHallOfFamerListProps) => {
  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3, xl: 4 }}>
      {hallOfFamers &&
        hallOfFamers.map((hallOfFamer) => (
          <HallOfFamerCard key={hallOfFamer.id} hallOfFamer={hallOfFamer} />
        ))}
    </SimpleGrid>
  );
};

export default HallOfFamerList;
