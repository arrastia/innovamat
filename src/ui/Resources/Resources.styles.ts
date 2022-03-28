import styled from 'styled-components';

import { CardsList } from 'ui/_styles/components/CardsList';
import { View } from 'ui/_styles/components/View';

const CardSection = styled(CardsList)`
  margin: 1rem 0;
  width: 100%;
`;

const Content = styled(View)``;

const Title = styled('h2')`
  margin-bottom: 23px;
`;

export const Styles = { CardSection, Content, Title };
