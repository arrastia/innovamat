import { Styles } from './NavLinkItem.styles';

import { RinconesIcon, TalleresIcon } from 'assets/icons';
import { Fragment } from 'react';

type Props = {
  icon: keyof typeof icons;
  label: string;
  route: string;
};

const icons = {
  ambientes: TalleresIcon,
  rincones: RinconesIcon,
  rutinas: RinconesIcon,
  talleres: TalleresIcon
};

export const NavLinkItem = ({ icon, label, route }: Props) => {
  const IconComponent = icons[icon];

  return (
    <li key={label}>
      <Styles.NavLinkItem className={({ isActive }) => (isActive ? 'isActive' : undefined)} key={route} to={route}>
        {({ isActive }) => (
          <Fragment>
            <IconComponent isActive={isActive} />
            <Styles.NavLinkItemLabel isActive={isActive}> {label}</Styles.NavLinkItemLabel>
          </Fragment>
        )}
      </Styles.NavLinkItem>
    </li>
  );
};
