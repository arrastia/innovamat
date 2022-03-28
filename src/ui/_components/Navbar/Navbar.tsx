import { Styles } from './Navbar.styles';

import { NavbarItem } from './_components/NavbarItem/NavbarItem';

import { useLocale } from 'ui/_tools/Hooks/useLocale';

import type { NavbarItemProps } from './@types/Navbar.types';

const menuItems: NavbarItemProps[] = [
  { label: 'Talleres', route: 'talleres', icon: 'talleres' },
  { label: 'Rincones', route: 'rincones', icon: 'rincones' },
  { label: 'Ambientes', route: 'ambientes', icon: 'ambientes' },
  { label: 'Rutinas', route: 'rutinas', icon: 'rutinas' }
];

export const Navbar = () => {
  const messages = useLocale();

  return (
    <Styles.Navbar>
      <Styles.NavbarTitle>{messages['dynamics']}</Styles.NavbarTitle>
      <Styles.Menu>
        {menuItems.map(menuItem => (
          <NavbarItem key={menuItem.label} {...menuItem} />
        ))}
      </Styles.Menu>
    </Styles.Navbar>
  );
};
