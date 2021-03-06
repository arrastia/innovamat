import type { Icon } from './@types/Icon.types';

export const SearchIcon = ({ color, isActive }: Icon) => {
  const defaultColor = isActive ? '#18C6AC' : '#fff';

  return (
    <svg fill="none" height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg">
      <path
        clipRule="evenodd"
        d="M12.3862 16.0777C15.9319 14.5708 17.5847 10.4749 16.0778 6.92923C14.5709 3.38355 10.475 1.73077 6.9293 3.23765C3.38362 4.74453 1.73084 8.84044 3.23772 12.3861C4.7446 15.9318 8.84051 17.5846 12.3862 16.0777Z"
        fillRule="evenodd"
        stroke={color ? color : defaultColor}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path d="M14.5898 14.5898L20 20.0007" stroke={color ? color : defaultColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    </svg>
  );
};
