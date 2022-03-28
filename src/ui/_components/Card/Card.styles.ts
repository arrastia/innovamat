import styled from 'styled-components';

import { Column } from 'ui/_styles/components/Column';
import { Image } from 'ui/_styles/components/Image';

const FavoriteButtonWrapper = styled('div')`
  opacity: 0;
  transition: all 200ms ease-out;
  visibility: hidden;
`;

const CardImage = styled(Image)`
  border-radius: 5px;
`;

const Card = styled(Column)`
  background-color: ${({ theme: { colors } }) => colors.white};
  border-radius: 5px;
  cursor: pointer;
  gap: 0.5rem;
  padding: 0.75rem;
  transition: all 100ms ease-in;

  &:hover {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    transform: scale(1.01);
    transition: all 100ms ease-in;

    & ${FavoriteButtonWrapper} {
      opacity: 1;
      transition: all 200ms ease-in;
      visibility: visible;
    }
  }

  &:active {
    transform: scale(0.99);
  }
`;

const Description = styled('span')`
  color: ${({ theme: { colors } }) => colors.darkGrey};
  min-height: 2rem;
`;

export const Styles = { Card, CardImage, Description, FavoriteButtonWrapper };
