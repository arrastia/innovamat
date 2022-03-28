import { Fragment } from 'react';

import { Styles } from './NavbarItem.styles';

import { RinconesIcon, TalleresIcon } from 'assets/icons';

import type { NavbarItemProps } from 'ui/_components/Navbar/@types/Navbar.types';

const icons = {
  ambientes: TalleresIcon,
  rincones: RinconesIcon,
  rutinas: RinconesIcon,
  talleres: TalleresIcon
};

export const NavbarItem = ({ icon, label, route }: NavbarItemProps) => {
  const IconComponent = icons[icon];

  return (
    <li key={label}>
      <Styles.NavbarItem className={({ isActive }) => (isActive ? 'isActive' : undefined)} key={route} to={route}>
        {({ isActive }) => (
          <Fragment>
            <IconComponent isActive={isActive} />
            <Styles.NavLinkItemLabel isActive={isActive}> {label}</Styles.NavLinkItemLabel>
          </Fragment>
        )}
      </Styles.NavbarItem>
    </li>
  );
};
