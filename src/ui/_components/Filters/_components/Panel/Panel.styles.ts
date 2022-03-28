import styled from 'styled-components';

import type { PanelProps } from './@types/Panel.types';

const Panel = styled('div')<PanelProps>`
  background: ${({ theme: { colors } }) => colors.white};
  border-radius: 0 0 10px 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  height: fit-content;
  max-height: 444px;
  max-width: 240px;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  padding: 19px 15px;
  position: absolute;
  right: 0;
  transform: ${({ isVisible }) => (isVisible ? 'translateY(0)' : 'rotateX(115deg) translateY(100%)')};
  transform-origin: 50% 0px;
  transition-duration: 300ms;
  transition-property: transform, opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  width: max-content;
  will-change: transform, opacity;
  z-index: 1;

  @media screen and (min-width: ${({ theme: { breakpoints } }) => breakpoints.tablet}) {
    left: 0;
    top: 40px;
  }
`;

export const Styles = { Panel };
