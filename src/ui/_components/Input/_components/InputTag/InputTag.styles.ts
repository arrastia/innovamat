import styled from 'styled-components';

import { Row } from 'ui/_styles/components/Row';

const TagWrapper = styled(Row)`
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 0.25rem;
  color: ${({ theme }) => theme.colors.white};
  opacity: 0.8;
  padding: 0.5rem;

  &:hover {
    opacity: 1;
  }

  & svg {
    cursor: pointer;
  }
`;

const Tag = styled('input')`
  border: none;
  color: white;
  outline: none;
  background: transparent;
`;

export const Styles = { Tag, TagWrapper };
