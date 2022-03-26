import { StrictMode, Suspense } from 'react';
import { RecoilRoot } from 'recoil';
import { render } from 'react-dom';

import { App } from './App';

render(
  <StrictMode>
    <RecoilRoot>
      <Suspense fallback={<div>Loading...</div>}>
        <App />
      </Suspense>
    </RecoilRoot>
  </StrictMode>,
  document.getElementById('root')
);
