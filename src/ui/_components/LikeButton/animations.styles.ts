import { keyframes } from 'styled-components';

export const heartPulse = keyframes`
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.5);
    }
`;

export const heartUnlike = keyframes`
    50% {
      transform: scale(0.75);
    }
`;
