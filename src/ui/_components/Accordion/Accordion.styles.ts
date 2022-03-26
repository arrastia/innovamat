import styled from 'styled-components';

import { Row } from 'ui/_styles/components/Row';

const Accordion = styled('div')``;

const AccordionTitle = styled(Row)`
  justify-content: space-between;
`;

const AccordionContent = styled('div')<{ isVisible: boolean }>`
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  padding: 1rem;
  transform-origin: 50% 0px;
  transform: ${({ isVisible }) => (isVisible ? 'translateY(0)' : 'rotateX(115deg) translateY(100%)')};
  transition-duration: 300ms;
  transition-property: transform, opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  width: 100%;
  will-change: transform, opacity;
`;

export const Styles = { Accordion, AccordionTitle, AccordionContent };
