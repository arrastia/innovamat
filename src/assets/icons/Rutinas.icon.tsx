import type { Icon } from './@types/Icon.types';

export const RutinasIcon = ({ color, isActive }: Icon) => {
  const defaultColor = isActive ? '#18C6AC' : '#A3B7B5';

  return (
    <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6.75 12.75H7.5C7.91421 12.75 8.25 13.0858 8.25 13.5V18.75"
        stroke={color ? color : defaultColor}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
      />
      <path d="M6.75 18.75H9.75" stroke={color ? color : defaultColor} stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
      <path
        d="M13.832 12.75H15.75C15.9955 12.7511 16.2251 12.8722 16.3646 13.0743C16.5041 13.2764 16.536 13.5339 16.45 13.764L14.58 18.75"
        stroke={color ? color : defaultColor}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
      />
      <path
        clip-rule="evenodd"
        d="M0.75 5.24997C0.75 4.42154 1.42157 3.74997 2.25 3.74997H21.75C22.5784 3.74997 23.25 4.42154 23.25 5.24997V21.75C23.25 22.5784 22.5784 23.25 21.75 23.25H2.25C1.42157 23.25 0.75 22.5784 0.75 21.75V5.24997Z"
        fill-rule="evenodd"
        stroke={color ? color : defaultColor}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
      />
      <path d="M0.75 9.74997H23.25" stroke={color ? color : defaultColor} stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
      <path d="M6.75 5.99997V0.749969" stroke={color ? color : defaultColor} stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
      <path d="M17.25 5.99997V0.749969" stroke={color ? color : defaultColor} stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
    </svg>
  );
};
