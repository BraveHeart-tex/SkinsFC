import {
  Heading,
  Avatar,
  Box,
  Center,
  Flex,
  Text,
  Stack,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';
import Image from 'next/image';
import logo from '@/app/components/logo/skinksLogo.svg';
import { Player } from '@prisma/client';

interface IHallOfFamerCardProps {
  hallOfFamer: Player;
}

export default function HallOfFamerCard({
  hallOfFamer,
}: IHallOfFamerCardProps) {
  return (
    <Center py={6}>
      <Box
        maxW={'270px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}
      >
        <Box bg={'black'}>
          <Image src={logo} alt='Logo' />
        </Box>
        <Flex justify={'center'} mt={-12}>
          <Avatar
            size={'xl'}
            src={hallOfFamer.img}
            css={{
              border: '2px solid white',
            }}
          />
        </Flex>

        <Box p={6}>
          <Stack spacing={0} align={'center'} mb={5}>
            <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
              {hallOfFamer.name}
            </Heading>
            <Text color={'gray.500'}>{hallOfFamer.nickName}</Text>
            <Text color={'gray.500'}>{hallOfFamer.position}</Text>
          </Stack>

          <Stack direction={'row'} justify={'center'} spacing={6}>
            <Stack spacing={0} align={'center'}>
              <Text fontWeight={600}>{hallOfFamer.gamesPlayed}</Text>
              <Text fontSize={'sm'} color={'gray.500'}>
                Maç
              </Text>
            </Stack>
            <Stack spacing={0} align={'center'}>
              <Text fontWeight={600}>{hallOfFamer.goalsScored}</Text>
              <Text fontSize={'sm'} color={'gray.500'}>
                Gol
              </Text>
            </Stack>
            <Stack spacing={0} align={'center'}>
              <Text fontWeight={600}>{hallOfFamer.assists}</Text>
              <Text fontSize={'sm'} color={'gray.500'}>
                Asist
              </Text>
            </Stack>
          </Stack>

          <Button
            w={'full'}
            mt={8}
            bg={useColorModeValue('#151f21', 'gray.900')}
            color={'white'}
            rounded={'md'}
            _hover={{
              transform: 'translateY(-2px)',
              boxShadow: 'lg',
            }}
          >
            FORZA SKINS!
          </Button>
        </Box>
      </Box>
    </Center>
  );
}
