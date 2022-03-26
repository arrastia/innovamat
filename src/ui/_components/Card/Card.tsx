import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LikeButton } from '../LikeButton';
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

export const Card = ({ description, id, image, title, toggleLike, onCardClick }: CardProps) => {
  return (
    <Styles.Card>
      <div onClick={onCardClick}>
        <img alt="" className="image" src={image} />
        <span className="title">{title}</span>
        <span className="description">{description}</span>
      </div>

      <Styles.Favorite>
        <LikeButton id={id} />
      </Styles.Favorite>
    </Styles.Card>
  );
};
