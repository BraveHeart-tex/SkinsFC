'use client';
import React from 'react';

import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
} from '@chakra-ui/react';
import { Link } from '@chakra-ui/next-js';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import NAV_LINKS from '@/app/utils/Links';
import logo from '../logo/skinksLogo.svg';
import Image from 'next/image';
import NavLinkComponent from './NavLinkComponent';

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      bg={'#212529'}
      px={4}
      border={'1px solid'}
      borderColor={'whiteAlpha.100'}
      color={'white'}
      position={'sticky'}
    >
      <Flex
        h={16}
        alignItems={'center'}
        justifyContent={{ base: 'space-between', md: 'space-around' }}
      >
        <IconButton
          size={'md'}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={'Open Menu'}
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
          color={'white'}
          bg={'#212529'}
        />
        <Box>
          <Link href={'/'}>
            <Image src={logo} alt={'4 Skins'} width={65} />
          </Link>
        </Box>
        <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
          {NAV_LINKS.map((item) => (
            <NavLinkComponent key={item.label} link={item} />
          ))}
        </HStack>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as={'nav'} spacing={4}>
            {NAV_LINKS.map((item) => (
              <NavLinkComponent key={item.label} link={item} />
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}
