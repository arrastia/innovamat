import type { Icon } from './@types/Icon.types';

export const TalleresIcon = ({ color, isActive }: Icon) => {
  const defaultColor = isActive ? '#18C6AC' : '#A3B7B5';

  return (
    <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7.5 3.767L5.934 1.418C5.63747 0.972933 5.1264 0.719413 4.59263 0.752594C4.05886 0.785774 3.58313 1.10063 3.344 1.579L0.75 6.767H12.75L10.681 2.629C10.4652 2.19857 10.0559 1.89789 9.58067 1.82066C9.10541 1.74343 8.62197 1.89904 8.281 2.239L7.181 3.292"
        stroke={color ? color : defaultColor}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        clipRule="evenodd"
        d="M20.25 3L17.25 11.25H23.25L20.25 3Z"
        fillRule="evenodd"
        stroke={color ? color : defaultColor}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path d="M20.25 11.25V14.25" stroke={color ? color : defaultColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      <path
        clipRule="evenodd"
        d="M3.75 12L0.75 20.25H6.75L3.75 12Z"
        fillRule="evenodd"
        stroke={color ? color : defaultColor}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path d="M3.75 20.25V23.25" stroke={color ? color : defaultColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      <path
        d="M19.5 19.7C20.0911 20.2663 20.5282 20.9739 20.77 21.756"
        stroke={color ? color : defaultColor}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M15 17.848C15.24 17.906 15.489 17.957 15.749 18C16.261 18.0829 16.7651 18.2087 17.256 18.376"
        stroke={color ? color : defaultColor}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M10.7 14.667C11.0231 15.3101 11.464 15.8867 12 16.367"
        stroke={color ? color : defaultColor}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M9.75003 9.75C9.74811 10.3345 9.77715 10.9186 9.83703 11.5"
        stroke={color ? color : defaultColor}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};
