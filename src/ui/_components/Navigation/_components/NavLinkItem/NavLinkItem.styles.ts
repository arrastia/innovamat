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

  label {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0em;
    line-height: 14px;
    text-align: center;
  }

  &:active {
    transform: scale(0.9);
    transition: transform 0.1s ease-in;
  }

  &.isActive {
    color: ${({ theme }) => theme.colors.primary};
  }

  & img {
    color: ${({ theme }) => theme.colors.primary};
    fill: ${({ theme }) => theme.colors.primary};
    stroke: ${({ theme }) => theme.colors.primary};
  }
`;

export const Styles = { NavLinkItem };
