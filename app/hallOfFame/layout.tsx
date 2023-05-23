import Navigation from '@/app/components/navbar/Navigation';
import Footer from '@/app/components/footer/Footer';

export const metadata = {
  title: 'SKINS | Hall Of Fame',
  description:
    'Skins is a football club based in Istanbul, Turkey. Founded in 2023 by a group of friends, the club is currently competing in the Turkish Super League.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Navigation />
      {children}
      <Footer />
    </div>
  );
}
