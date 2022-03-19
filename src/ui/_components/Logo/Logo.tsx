import { Styles } from './Logo.styles';

import { logo } from 'assets/images';

import { useFountain } from 'ui/_tools/Hooks/useFountain';

import type { LogoProps } from './@types/Logo.types';

export const Logo = ({ onClick }: LogoProps) => {
  useFountain();

  return (
    <Styles.Logo id="fountain-animation-id" onClick={onClick}>
      <Styles.Icon src={logo} />
    </Styles.Logo>
  );
};
