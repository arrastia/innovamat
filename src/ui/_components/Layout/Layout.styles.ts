import styled from 'styled-components';

import { View } from 'ui/_styles/components/View';

const Layout = styled('div')`
  align-items: center;
  background-color: ${({ theme: { colors } }) => colors.white};
  display: flex;
  flex-direction: column;
  font-size: 15px;
  font-weight: 500;
  height: 100vh;
  justify-content: center;
  min-height: 100vh;
  position: relative;
  user-select: none;
  width: 100vw;
`;

const LoadingView = styled(View)`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
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

export const Styles = { Layout, LoadingView, Main };
