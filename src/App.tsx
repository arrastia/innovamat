import { lazy, Suspense } from 'react';
import { useRecoilValue } from 'recoil';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from './GlobalStyles';

import { routes } from 'configuration/routes';

import { Layout } from 'ui/_components/Layout';
import { Skeleton } from 'ui/_components/Skeleton/Skeleton';

import { NotFound } from 'ui/NotFound';
import { SearchedResults } from 'ui/SearchedResults';

import { isDarkModeState } from 'ui/_tools/Stores/UserStore';

import { theme } from 'ui/_styles/theme';

const Resources = lazy(() => import('ui/Resources'));
const ResourceDetails = lazy(() => import('ui/ResourceDetails'));

export function App() {
  const isDarkMode = useRecoilValue(isDarkModeState);

  return (
    <ThemeProvider theme={{ ...theme }}>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<Navigate to={'/recursos/talleres'} />} path={'/'} />
          <Route element={<Layout />} path={'/recursos'}>
            <Route element={<Navigate to={'talleres'} />} index={true} />
            <Route
              element={
                <Suspense
                  fallback={
                    <Skeleton viewBox="0 0 380 70">
                      <rect height="70" rx="5" ry="5" width="70" x="0" y="0" />
                      <rect height="13" rx="4" ry="4" width="300" x="80" y="17" />
                      <rect height="10" rx="3" ry="3" width="250" x="80" y="40" />
                    </Skeleton>
                  }>
                  <Resources />
                </Suspense>
              }
              path={':tag'}
            />
            <Route element={<ResourceDetails />} path={':tag/:resourceId'} />
            <Route element={<SearchedResults />} path={'search'} />
          </Route>
          <Route element={<NotFound />} path={routes.NOT_FOUND} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
