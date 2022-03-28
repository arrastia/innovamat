import styled from 'styled-components';

import { sync } from 'ui/_styles/animations/spinner';

const Spinner = styled('div')`
  align-items: center;
  display: flex;
  height: fit-content;
  justify-content: center;
  width: fit-content;
`;

const Dot = styled('span')`
  animation-duration: 600ms;
  animation-fill-mode: both;
  animation-iteration-count: infinite;
  animation-name: ${sync};
  animation-timing-function: ease-in-out;
  background-color: #18c6ac;
  border-radius: 100%;
  display: inline-block;
  height: 15px;
  margin: 5px;
  width: 15px;
`;

export const Styles = { Spinner, Dot };
