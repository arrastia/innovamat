import { lazy } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from './GlobalStyles';

import { routes } from 'configuration/routes';

import { Layout } from 'ui/_components/Layout';

import { NotFound } from 'ui/NotFound';

import { theme } from 'ui/_styles/theme';

const Resources = lazy(() => import('ui/Resources'));
const ResourceDetails = lazy(() => import('ui/ResourceDetails'));
const SearchedResults = lazy(() => import('ui/SearchedResults'));

export function App() {
  return (
    <ThemeProvider theme={{ ...theme }}>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<Navigate to={routes.MAIN} />} path={routes.HOME} />
          <Route element={<Layout />} path={routes.RESOURCES}>
            <Route element={<Navigate to={routes.RESOURCES_MAIN} />} index={true} />
            <Route element={<Resources />} path={routes.RESOURCES_BY_TAG} />
            <Route element={<ResourceDetails />} path={routes.RESOURCE_DETAILS} />
            <Route element={<SearchedResults />} path={routes.SEARCH} />
          </Route>
          <Route element={<NotFound />} path={routes.NOT_FOUND} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
