import type { Icon } from './@types/Icon.types';

export const ArrowIcon = ({ color, isActive }: Icon) => {
  const defaultColor = isActive ? '#18C6AC' : '#A3B7B5';

  return (
    <svg fill="none" height="18" viewBox="0 0 18 18" width="18" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15.0975 13.3762L16.425 12.0412L9.00005 4.62375L1.57504 12.0487L2.90254 13.3762L9.00005 7.27875L15.0975 13.3762Z"
        fill={color ? color : defaultColor}
      />
    </svg>
  );
};
