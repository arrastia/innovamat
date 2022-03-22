import { Styles } from './Navigation.styles';

import { RinconesIcon, TalleresIcon } from 'assets/icons';

import { NavLinkItem } from './_components/NavLinkItem';

const icons = {
  ambientes: TalleresIcon,
  rincones: RinconesIcon,
  rutinas: RinconesIcon,
  talleres: TalleresIcon
};

interface Item {
  label: string;
  route: string;
  icon: keyof typeof icons;
}

const menuItems: Item[] = [
  { label: 'Talleres', route: 'talleres', icon: 'talleres' },
  { label: 'Rincones', route: 'rincones', icon: 'rincones' },
  { label: 'Ambientes', route: 'ambientes', icon: 'ambientes' },
  { label: 'Rutinas', route: 'rutinas', icon: 'rutinas' }
];

export const Navigation = () => (
  <Styles.Navigation>
    <Styles.Menu>
      {menuItems.map(menuItem => (
        <NavLinkItem key={menuItem.label} {...menuItem} />
      ))}
    </Styles.Menu>
  </Styles.Navigation>
);
