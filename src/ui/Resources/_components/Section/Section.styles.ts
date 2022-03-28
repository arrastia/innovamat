import styled from 'styled-components';

import { CardsList } from 'ui/_styles/components/CardsList';

const CardSection = styled(CardsList)`
  margin: 1rem 0;
  width: 100%;
`;

const Divider = styled('hr')`
  border-top: 1px solid #c5d6d5;
  border: 0;
  height: 2px;
`;

export const Styles = { CardSection, Divider };
