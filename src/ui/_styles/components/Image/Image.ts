import styled from 'styled-components';

export const Image = styled('img')`
  cursor: pointer;
  height: auto;
  max-width: 100%;
  transition: transform 0.1s ease-out;
  user-select: none;

  &:active {
    transform: scale(0.99);
    transition: transform 0.1s ease-in;
  }
`;
