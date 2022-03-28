import styled from 'styled-components';

import { CardsList } from 'ui/_styles/components/CardsList';

const View = styled('div')`
  overflow: hidden auto;
  padding: 1rem;
  position: relative;
  width: 100%;

  @media screen and (min-width: ${props => props.theme.breakpoints.phone}) {
    padding-left: 45px;
  }
`;

const Cards = styled(CardsList)``;

export const Styles = { Cards, View };
