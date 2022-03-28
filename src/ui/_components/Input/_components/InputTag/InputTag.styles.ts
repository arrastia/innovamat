import styled from 'styled-components';

import { Row } from 'ui/_styles/components/Row';

const TagWrapper = styled(Row)`
  background: ${({ theme: { colors } }) => colors.primary};
  border-radius: 0.25rem;
  color: ${({ theme: { colors } }) => colors.white};
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
  background: transparent;
  border: none;
  color: ${({ theme: { colors } }) => colors.white};
  outline: none;
`;

export const Styles = { Tag, TagWrapper };
