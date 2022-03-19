import styled from 'styled-components';

import { Row } from 'ui/_styles/components/Row';

const Logo = styled(Row)`
  cursor: pointer;
  gap: 0;
  padding-bottom: 0.5rem;
  transition: transform 0.1s ease-in;
  user-select: none;

  &:active {
    transform: scale(0.9);
    transition: transform 0.1s ease-in;
  }
`;

const Icon = styled('img')<{ size?: { height: string; width: string } }>`
  cursor: pointer;
  transition: transform 0.1s ease-in;
  user-select: none;
  width: ${({ size }) => (size?.width ? size.width : '10rem')};
`;

export const Styles = { Logo, Icon };
