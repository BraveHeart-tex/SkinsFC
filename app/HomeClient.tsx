'use client';
import About from '@/app/components/about/About';
import Footer from '@/app/components/footer/Footer';
import Hero from '@/app/components/hero/Hero';
import Navigation from '@/app/components/navbar/Navigation';
import Players from '@/app/components/players/Players';
import { Container } from '@chakra-ui/react';
import Games from './components/games/Games';

export default function HomeClient() {
  return (
    <div>
      <Navigation />
      <Hero />
      <About />
      <Players />
      <Games />
      <Footer />
    </div>
  );
}
