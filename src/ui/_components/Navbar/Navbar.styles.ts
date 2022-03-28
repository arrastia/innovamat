import styled from 'styled-components';

const Navbar = styled('nav')`
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

  @media screen and (min-width: ${({ theme: { breakpoints } }) => breakpoints.tablet}) {
    border-right: 1px solid;
    border-right-color: ${({ theme }) => theme.colors.lightGrey};
    box-shadow: none;
    flex-direction: column;
    flex-shrink: 0;
    gap: 1rem;
    height: 80%;
    justify-content: start;
    max-width: calc(16rem);
    overflow: auto;
    padding: 1.5rem;
    padding-left: 2.5rem;
    position: relative;
    z-index: 0;
  }
`;

const Menu = styled('ul')`
  display: flex;
  gap: 2rem;
  justify-content: center;
  list-style: none;
  padding: 1rem 2rem;
  width: 100%;

  @media screen and (min-width: ${({ theme: { breakpoints } }) => breakpoints.tablet}) {
    flex-direction: column;
    gap: 1.25rem;
    justify-content: start;
    padding: 1rem 0;
  }
`;

const NavbarTitle = styled('h4')`
  display: none;

  @media screen and (min-width: ${({ theme: { breakpoints } }) => breakpoints.tablet}) {
    border-bottom: 1px solid;
    border-bottom-color: ${({ theme: { colors } }) => colors.lightGrey};
    display: block;
    font-size: 14px;
    font-weight: 700;
    justify-content: space-between;
    letter-spacing: 0em;
    line-height: 16px;
    margin-bottom: 0.6rem;
    margin: 0px;
  }
`;

export const Styles = { Menu, Navbar, NavbarTitle };
