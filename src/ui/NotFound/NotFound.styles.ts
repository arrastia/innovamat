import styled from 'styled-components';

const NotFoundWrapper = styled('div')`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TextWrapper = styled('div')`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const ImageWrapper = styled('div')`
  width: 45%;

  width: 100%;
`;

const Image = styled('img')`
  max-width: 100%;
  height: auto;
`;

export const Styles = { Image, ImageWrapper, NotFoundWrapper, TextWrapper };
