import styled from 'styled-components';

const Layout = styled('div')`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  font-size: 15px;
  font-weight: 500;
  height: 100vh;
  justify-content: center;
  min-height: 100vh;
  /* padding: 2rem; */
  /* padding-top: 1rem; */
  position: relative;
  user-select: none;
  width: 100vw;
`;

const Main = styled('main')`
  border-radius: 14px;
  display: flex;
  flex-grow: 1;
  height: 100%;
  justify-content: center;
  overflow: hidden;
  position: relative;
  width: 100%;
`;

export const Styles = { Layout, Main };
