import styled from 'styled-components';

const Panel = styled('div')<{ isVisible: boolean }>`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 0px 0px 10px 10px;
  border: 1px solid #e3e3e3;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  max-height: 444px;
  height: fit-content;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  /* padding: 1rem; */
  padding: 19px 15px;
  position: absolute;
  transform-origin: 50% 0px;
  transform: ${({ isVisible }) => (isVisible ? 'translateY(0)' : 'rotateX(115deg) translateY(100%)')};
  transition-duration: 300ms;
  transition-property: transform, opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  width: max-content;
  will-change: transform, opacity;
  z-index: 1;
  right: 0;
  max-width: 240px;

  @media (min-width: 768px) {
    left: 0;
  }
`;

export const Styles = { Panel };
