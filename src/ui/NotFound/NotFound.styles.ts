import styled from 'styled-components';

import { Image } from 'ui/_styles/components/Image';

const NotFoundWrapper = styled('div')`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
  width: 100%;
  min-height: 100vh;

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 1rem 3rem;
  }
`;

const TextWrapper = styled('div')`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const NotFoundImage = styled(Image)`
  height: auto;
  max-width: 100%;
`;

export const Styles = { NotFoundImage, NotFoundWrapper, TextWrapper };
