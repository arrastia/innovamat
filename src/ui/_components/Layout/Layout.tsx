import { Suspense } from 'react';
import { Outlet, useParams } from 'react-router-dom';

import { ErrorBoundary } from 'react-error-boundary';

import { Styles } from './Layout.styles';

import { ErrorFallback } from 'ui/_components/ErrorFallback';
import { Header } from 'ui/_components/Header';
import { Navbar } from 'ui/_components/Navbar';
import { Spinner } from 'ui/_components/Spinner';

export const Layout = () => {
  const { tag } = useParams();

  const renderSuspenseFallback = () => (
    <Styles.LoadingView>
      <Spinner />
    </Styles.LoadingView>
  );

  return (
    <Styles.Layout>
      <Header />
      <Styles.Main>
        <Navbar />
        <Suspense fallback={renderSuspenseFallback()}>
          <ErrorBoundary FallbackComponent={ErrorFallback} key={tag}>
            <Outlet />
          </ErrorBoundary>
        </Suspense>
      </Styles.Main>
    </Styles.Layout>
  );
};
