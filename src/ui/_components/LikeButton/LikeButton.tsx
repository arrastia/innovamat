import { useRecoilState } from 'recoil';

import { Styles } from './LikeButton.styles';

import { likedCardState } from 'ui/_tools/Stores/UserStore';

import { useLocalStorage } from 'ui/_tools/Hooks/useLocalStorage';

type Props = {
  id: string;
};

export const LikeButton = (props: Props) => {
  const [favoriteIds, setFavotirteIds] = useLocalStorage('innovamat-favorite-ids', []);

  const [isLiked, setIsLiked] = useRecoilState(likedCardState(props.id));

  const toggleLike = () => {
    setIsLiked(prevState => ({ ...prevState, isLiked: !prevState.isLiked }));
  };

  return (
    <Styles.LikeButtonWrapper className="middle-wrapper" isLiked={isLiked.isLiked} onClick={toggleLike}>
      <div className="like-wrapper">
        <button className={`${isLiked.isLiked ? 'liked' : ''} like-button`}>
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
