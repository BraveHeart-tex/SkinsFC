'use client';
import FooterLinks from '@/app/utils/FooterLinks';
import { Flex, Link, Text, Container, VStack } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Container maxW='7xl' p={{ base: 5, md: 10 }}>
      <VStack spacing={5} alignItems='initial'>
        <Flex
          flexWrap='wrap'
          direction={{ base: 'column', md: 'row' }}
          alignItems='start'
          justifyContent='space-between'
        >
          {FooterLinks.map((data, index) => (
            <Flex key={index} direction='column' mb='3'>
              <Link fontWeight='500' href='#' color={'white'}>
                {data.heading}
              </Link>
              <Flex direction={{ base: 'row', md: 'column' }}>
                {data.links.map((link, index) => (
                  <Link
                    key={index}
                    padding={1}
                    fontSize={{ base: 'sm', sm: 'md' }}
                    href={link.href}
                    isExternal={link.isExternal}
                    mr={{ base: 1, sm: 2, md: 0 }}
                    color='gray.500'
                    _hover={{ color: 'gray.300' }}
                  >
                    {link.label}
                  </Link>
                ))}
              </Flex>
            </Flex>
          ))}
        </Flex>
        <Flex alignItems='center'>
          <Text color='gray.500' fontSize='0.875rem' pl='0.5rem'>
            &copy; {new Date().getFullYear()}{' '}
            <span className='fancy'>SKINS FC</span> Bütün hakları saklıdır.
          </Text>
        </Flex>
      </VStack>
    </Container>
  );
};

export default Footer;
