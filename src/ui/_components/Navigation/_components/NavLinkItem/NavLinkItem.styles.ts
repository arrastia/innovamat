import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

const NavLinkItem = styled(NavLink)`
  align-items: center;
  color: ${({ theme }) => theme.colors.secondary};
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
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const NavLinkItemLabel = styled('label')<{ isActive: boolean }>`
  color: ${({ theme, isActive }) => theme.colors[isActive ? 'primary' : 'darkGrey']};
  cursor: pointer;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0em;
  line-height: 14px;
  text-align: center;
`;

export const Styles = { NavLinkItem, NavLinkItemLabel };
