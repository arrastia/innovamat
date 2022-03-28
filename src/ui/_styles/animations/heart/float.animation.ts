import { keyframes } from 'styled-components';

export const floatPrimary = keyframes`
    0% {
      opacity: 0;
      transform: translate(0) rotate(0);
    }
    50% {
      opacity: 1;
      transform: translate(0, -25px) rotate(-20deg);
    }
`;

export const floatSecondary = keyframes`
 0% {
      opacity: 0;
      transform: translate(0) rotate(0) scale(0);
    }
    50% {
      opacity: 0.9;
      transform: translate(-10px, -38px) rotate(25deg) scale(1);
    }
`;
