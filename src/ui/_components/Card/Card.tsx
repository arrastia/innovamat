import { Styles } from './Card.styles';

import { LikeButton } from 'ui/_components/LikeButton';

import type { CardProps } from './@types/Card.types';

export const Card = ({ description, id, image, onCardClick, title }: CardProps) => (
  <Styles.Card onClick={onCardClick}>
    <Styles.CardImage alt="resource-card-image" src={image} />
    {title}
    <Styles.Description className="description">{description}</Styles.Description>

    <Styles.FavoriteButtonWrapper>
      <LikeButton id={id} />
    </Styles.FavoriteButtonWrapper>
  </Styles.Card>
);
