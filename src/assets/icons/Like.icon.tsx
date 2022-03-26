import { Icon } from './@types/Icon.types';

interface ILikeIcon extends Icon {
  className?: string;
}

export const LikeIcon = ({ className, color }: ILikeIcon) => {
  return (
    <svg className={className} height="18" viewBox="0 0 21 18" width="21" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10.101 4.417S8.895.207 5.111.207c-4.465 0-10.967 6.846 5.082 17.592C25.237 7.03 19.665.202 15.501.202c-4.162 0-5.4 4.215-5.4 4.215z"
        fill={color ? color : '#FF6E6F'}
        fill-rule="evenodd"
      />
    </svg>
  );
};
