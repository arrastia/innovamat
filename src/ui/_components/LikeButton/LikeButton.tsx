import { useState } from 'react';
import { useRecoilState } from 'recoil';

import { Styles } from './LikeButton.styles';

import { likedResourcesState } from 'ui/_tools/Stores/UserStore';

import type { MouseEvent } from 'react';
import type { LikeButtonProps } from './@types/LikeButton.types';

export const LikeButton = ({ id }: LikeButtonProps) => {
  const [favoriteIds, setFavoriteIds] = useRecoilState(likedResourcesState);

  const [isLiked, setIsLiked] = useState(favoriteIds.includes(id));

  const toggleLike = (event: MouseEvent, isLiked: boolean) => {
    event.stopPropagation();

    setIsLiked(!isLiked);
    setFavoriteIds(prevState => (isLiked ? prevState.filter(likedId => likedId !== id) : [...prevState, id]));
  };

  return (
    <Styles.LikeButtonWrapper isLiked={isLiked} onClick={event => toggleLike(event, isLiked)}>
      <Styles.LikeButton className={`${isLiked ? 'liked' : ''}`}>
        <Styles.LikeIcon>
          <div className="heart-animation-1" />
          <div className="heart-animation-2" />
        </Styles.LikeIcon>
        Favorite
      </Styles.LikeButton>
    </Styles.LikeButtonWrapper>
  );
};
