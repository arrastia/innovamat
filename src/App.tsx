import { useRecoilValue } from 'recoil';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from './GlobalStyles';

import { routes } from 'configuration/routes';

import { Layout } from 'ui/_components/Layout';

import { NotFound } from 'ui/NotFound';
import { Resources } from 'ui/Resources';

import { isDarkModeState } from 'ui/_tools/Stores/UserStore';

import { theme } from 'ui/_styles/theme';

export function App() {
  const isDarkMode = useRecoilValue(isDarkModeState);

  return (
    <ThemeProvider theme={{ ...theme }}>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />} path={routes.HOME}>
            <Route element={<Resources />} index={true} />
            <Route element={<Resources />} path={routes.RESOURCE_BY_TAG} />
            <Route element={<NotFound />} path={routes.NOT_FOUND} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
