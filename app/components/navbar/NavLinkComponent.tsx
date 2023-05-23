import { NavLinkType } from '@/app/utils/Links';
import { Link } from '@chakra-ui/react';

interface INavLinkComponentProps {
  link: NavLinkType;
}

const NavLinkComponent = ({ link }: INavLinkComponentProps) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: '#36393b',
    }}
    href={`/${link.url}`}
  >
    {link.label}
  </Link>
);

export default NavLinkComponent;
