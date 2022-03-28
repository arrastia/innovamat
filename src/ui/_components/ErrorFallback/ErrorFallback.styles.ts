import styled from 'styled-components';

import { Image } from 'ui/_styles/components/Image';
import { View } from 'ui/_styles/components/View';

const Content = styled(View)`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: left;

  @media screen and (min-width: ${({ theme: { breakpoints } }) => breakpoints.phone}) {
    gap: 2rem;
  }
`;

const ErrorImage = styled(Image)`
  max-width: 100%;
  height: auto;
`;

const ErrorMessage = styled('span')`
  font-size: 1.2rem;
  font-style: italic;
  left: 0;
  position: absolute;
  top: 2rem;
  width: 75%;
`;

const ImageWrapper = styled('div')`
  position: relative;
`;

const Title = styled('h1')`
  align-self: flex-start;
`;

export const Styles = { Content, ErrorImage, ErrorMessage, ImageWrapper, Title };
