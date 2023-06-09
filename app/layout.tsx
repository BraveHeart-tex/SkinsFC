import './globals.css';
import { Public_Sans } from 'next/font/google';
import { Providers } from './Providers';
import Navigation from '@/app/components/navbar/Navigation';
import Footer from '@/app/components/footer/Footer';

const public_sans = Public_Sans({ subsets: ['latin'] });

export const metadata = {
  title: "SKINS | Football Club'23",
  description:
    'Skins is a football club based in Istanbul, Turkey. Founded in 2023 by a group of friends, the club is currently competing in the Turkish Super League.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={public_sans.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
