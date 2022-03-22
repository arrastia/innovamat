import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Styles } from './Card.styles';

type CardProps = {
  description: string;
  id: string;
  image: string;
  isLiked: boolean;
  title: string;
  toggleLike: () => void;
  onCardClick: () => void;
};

export const Card: FC<CardProps> = ({ description, id, image, isLiked, title, toggleLike, onCardClick }) => {
  const native = useNavigate();

  return (
    <Styles.Card onClick={onCardClick}>
      <span className="title">{title}</span>
      <span className="description">{description}</span>
      <img alt="" className="image" src={image} />

      {isLiked && '💜'}
    </Styles.Card>
  );
};
