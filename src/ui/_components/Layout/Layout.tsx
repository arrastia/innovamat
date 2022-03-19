import { Outlet } from 'react-router-dom';

import { Styles } from './Layout.styles';

import { Header } from 'ui/_components/Header';
import { Navigation } from 'ui/_components/Navigation';

export const Layout = () => {
  return (
    <Styles.Layout>
      <Header />
      <Styles.Main>
        <Navigation />
        <Outlet />
      </Styles.Main>
    </Styles.Layout>
  );
};
