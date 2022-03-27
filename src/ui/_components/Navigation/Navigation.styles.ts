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
    border-right: 1px solid;
    border-right-color: ${({ theme }) => theme.colors.lightGrey};
    flex-basis: 30%;
    flex-shrink: 0;
    max-width: 272px;

    overflow: auto;
    padding: 1.5rem;
    padding-left: 2.5rem;
    position: relative;
    flex-direction: column;
    justify-content: start;
    gap: 1rem;
    z-index: 0;
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

  @media (min-width: 768px) {
    flex-direction: column;
    justify-content: start;
    gap: 1.25rem;
    padding: 1rem 0;
  }
`;

const NavigtaionTitle = styled('h3')`
  display: none;

  @media (min-width: 768px) {
    border-bottom: 1px solid;
    border-bottom-color: ${({ theme }) => theme.colors.lightGrey};
    display: block;

    font-size: 14px;
    font-weight: 700;
    line-height: 16px;
    letter-spacing: 0em;
    margin: 0px;
    margin-bottom: 0.6rem;
    display: flex;
    justify-content: space-between;
  }
`;

export const Styles = { Menu, Navigation, NavigtaionTitle };
