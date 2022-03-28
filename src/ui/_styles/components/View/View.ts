import styled from 'styled-components';

export const View = styled('div')`
  overflow: hidden auto;
  padding: 1rem;
  position: relative;
  width: 100%;

  @media screen and (min-width: ${({ theme: { breakpoints } }) => breakpoints.phone}) {
    padding-left: 45px;
  }
`;
