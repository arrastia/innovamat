import styled from 'styled-components';

import { Row } from 'ui/_styles/components/Row';

import type { AccordionAnimationProps } from './@types/Accordion.types';

const Accordion = styled('div')<AccordionAnimationProps>`
  margin-bottom: ${({ isVisible }) => (isVisible ? '29px' : '10px')};
  transition: margin-bottom 300ms cubic-bezier(0.4, 0, 0.2, 1);
`;

const Title = styled(Row)<AccordionAnimationProps>`
  border-bottom: ${({ isVisible }) => (isVisible ? 'none' : '1px solid')};
  border-color: ${({ theme: { colors } }) => colors.lightGrey};
  justify-content: space-between;
  padding-bottom: 4px;
  margin-bottom: 8px;

  button {
    padding: 0;
  }

  .accordion-arrow-icon {
    transform: ${({ isVisible }) => (isVisible ? 'rotate(180deg)' : 'rotate(90deg)')};
    transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

const Content = styled(Row)<AccordionAnimationProps>`
  gap: 0.5rem;
  flex-wrap: wrap;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  padding: 0;
  transform-origin: 50% 0px;
  transform: ${({ isVisible }) => (isVisible ? 'translateY(0)' : 'rotateX(115deg) translateY(100%)')};
  transition-duration: 300ms;
  transition-property: transform, opacity, max-height, visibility;
  max-height: ${({ isVisible }) => (isVisible ? '100px' : 0)};
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  width: 100%;
  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
  will-change: transform, opacity, max-height, visibility;
`;

export const Styles = { Accordion, Content, Title };
