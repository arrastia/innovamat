import { css, keyframes } from 'styled-components';

export const nestedFloat = (index: number) => {
  const animations = [
    css`
      transform: translate(13px, -13px) rotate(30deg);
    `,
    css`
      transform: translate(18px, -10px) rotate(55deg);
    `,
    css`
      transform: translate(-20px, -10px) rotate(-40deg);
    `,
    css`
      transform: translate(2px, -18px) rotate(-25deg);
    `
  ];

  return keyframes`
    0% {
      transform: translate(0) rotate(0);
      visibility: hidden;
    } 
    50% {
      visibility: visible;
      ${animations[index]}
    }
`;
};
