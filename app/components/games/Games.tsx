'use client';
import {
  Box,
  Button,
  Container,
  Heading,
  Link,
  Stack,
  Text,
} from '@chakra-ui/react';
import React, { useState } from 'react';

const surpriseURLs = [
  'https://www.youtube.com/watch?v=ND03s_9kd4g&t=3s',
  'https://www.youtube.com/watch?v=i6rLDa1-W-c&t=2s',
  'https://www.youtube.com/watch?v=CwR3chrDskY',
  'https://www.youtube.com/watch?v=t4UdbmfIFAc&t=1s',
  'https://www.youtube.com/watch?v=QjRYopBRUIc&t=28s',
  'https://www.youtube.com/watch?v=Ul1rSxXlaTU&t=2332s',
];

const Games = () => {
  const [surpriseURL, setSurpriseURL] = useState(
    'https://www.youtube.com/watch?v=Ul1rSxXlaTU&t=2332s'
  );
  return (
    <Container
      maxW='5xl'
      p={{ base: 4, sm: 10 }}
      id='games'
      color={'white'}
      minHeight={'100vh'}
      className='center-flex'
    >
      <Stack spacing={8}>
        <Heading my={10}>
          <span className='fancy'>SKINS FC</span> maçları çok yakında burada!
        </Heading>
        <Text fontSize={'xl'}>
          Maç sonuçlarını burada görebileceksiniz. Size en iyi hizmeti vermek
          için yoğun bir şekilde çalışıyoruz.
        </Text>
        <Stack direction={{ base: 'column', md: 'row' }}>
          <Button
            bg={'#495057'}
            _hover={{
              bg: '#868e96',
            }}
          >
            <Link href='/hallOfFame'>
              O sırada <span className='fancy'>Hall of Fame</span>&apos;e göz
              atın
            </Link>
          </Button>
          <Button
            variant={'outline'}
            _hover={{
              bg: '#413f3f',
            }}
          >
            <Link
              href={surpriseURL}
              onClick={() => {
                const randomURL =
                  surpriseURLs[Math.floor(Math.random() * surpriseURLs.length)];
                setSurpriseURL(randomURL);
              }}
              isExternal
            >
              Sürpriz bir video izleyin
            </Link>
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Games;
