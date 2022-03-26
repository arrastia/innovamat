import { useRecoilState } from 'recoil';

import { Styles } from './LikeButton.styles';

import { likedCardState } from 'ui/_tools/Stores/UserStore';

import { useLocalStorage } from 'ui/_tools/Hooks/useLocalStorage';
import { useState } from 'react';

type Props = {
  id: string;
};

export const LikeButton = (props: Props) => {
  const [favoriteIds, setFavoriteIds] = useLocalStorage<string[]>('innovamat-favorite-ids', []);

  const [isLiked, setIsLiked] = useState(favoriteIds.includes(props.id));

  const toggleLike = () => {
    setIsLiked(prevState => {
      return !prevState;
    });
  };

  return (
    <Styles.LikeButtonWrapper className="middle-wrapper" isLiked={isLiked} onClick={toggleLike}>
      <div className="like-wrapper">
        <button className={`${isLiked ? 'liked' : ''} like-button`}>
          <span className="like-icon">
            <div className="heart-animation-1"></div>
            <div className="heart-animation-2"></div>
          </span>
          Favorite
        </button>
      </div>
    </Styles.LikeButtonWrapper>
  );
};
