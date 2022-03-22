import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Navigation = styled('nav')`
  background: white;
  border: none;
  bottom: 0;
  box-shadow: 0px -4px 10px rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: fixed;
  width: 100%;
  z-index: 1;

  @media (min-width: 768px) {
    border-right-color: ${({ theme }) => theme.colors.primary};
    border-right: 1px solid;
    flex-basis: 20%;
    flex-shrink: 0;
    max-width: 272px;

    overflow: auto;
    padding: 1.5rem;
    position: relative;
  }
`;

const Menu = styled('ul')`
  display: flex;
  justify-content: center;
  gap: 2rem;
  list-style: none;
  /* max-width: 18.5rem; */
  padding: 1rem 2rem;
  width: 100%;
`;

export const Styles = { Menu, Navigation };
