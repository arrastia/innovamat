import { StrictMode } from 'react';
import { RecoilRoot } from 'recoil';
import { render } from 'react-dom';

import { App } from './App';

render(
  <StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </StrictMode>,
  document.getElementById('root')
);
