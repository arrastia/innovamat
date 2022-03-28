import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

import type { NavbarItemAnimationProps } from './@types/NavbarItem.types';

const NavbarItem = styled(NavLink)`
  align-items: center;
  color: ${({ theme: { colors } }) => colors.secondary};
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  text-decoration: none;
  transition: transform 0.1s ease-in;

  &:active {
    transform: scale(0.9);
    transition: transform 0.1s ease-in;
  }

  &.isActive {
    color: ${({ theme: { colors } }) => colors.primary};
  }

  @media screen and (min-width: ${({ theme: { breakpoints } }) => breakpoints.tablet}) {
    flex-direction: row;
    gap: 1rem;
  }
`;

const NavLinkItemLabel = styled('span')<NavbarItemAnimationProps>`
  color: ${({ isActive, theme: { colors } }) => colors[isActive ? 'primary' : 'darkGrey']};
  cursor: pointer;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0em;
  line-height: 14px;
  text-align: center;
`;

export const Styles = { NavbarItem, NavLinkItemLabel };
