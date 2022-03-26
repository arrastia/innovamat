import { Outlet, useParams } from 'react-router-dom';

import { Styles } from './Layout.styles';

import { Header } from 'ui/_components/Header';
import { Navigation } from 'ui/_components/Navigation';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { OurFallbackComponent } from '../OurFallbackComponent/OurFallbackComponent';

export const Layout = () => {
  const { tag } = useParams();

  return (
    <Styles.Layout>
      <Header />
      <Styles.Main>
        <Navigation />
        <ErrorBoundary FallbackComponent={OurFallbackComponent} key={tag}>
          <Outlet />
        </ErrorBoundary>
      </Styles.Main>
    </Styles.Layout>
  );
};
