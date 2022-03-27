import styled from 'styled-components';

import { Row } from 'ui/_styles/components/Row';

const Accordion = styled('div')<{ isVisible: boolean }>`
  margin-bottom: ${({ isVisible }) => (isVisible ? '29px' : '10px')};
  transition-duration: 300ms;
  transition-property: margin-bottom;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
`;

const AccordionTitle = styled(Row)<{ isVisible: boolean }>`
  border-bottom: ${({ isVisible }) => (isVisible ? 'none' : '1px solid')};
  border-color: ${({ theme }) => theme.colors.lightGrey};
  justify-content: space-between;
  padding-bottom: 4px;
  margin-bottom: 8px;

  button {
    padding: 0;
  }
`;

const AccordionContent = styled(Row)<{ isVisible: boolean }>`
  gap: 0.5rem;
  flex-wrap: wrap;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  padding: 0;
  transform-origin: 50% 0px;
  transform: ${({ isVisible }) => (isVisible ? 'translateY(0)' : 'rotateX(115deg) translateY(100%)')};
  transition-duration: 300ms;
  transition-property: transform, opacity, max-height;
  max-height: ${({ isVisible }) => (isVisible ? '100px' : 0)};
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  width: 100%;
  will-change: transform, opacity, max-height;
`;

export const Styles = { Accordion, AccordionTitle, AccordionContent };
