import styled from 'styled-components';

export const CardsList = styled('div')`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr;

  @media screen and (min-width: ${({ theme: { breakpoints } }) => breakpoints.phone}) {
    grid-gap: 1.25rem;
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: ${({ theme: { breakpoints } }) => breakpoints.tablet}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (min-width: ${({ theme: { breakpoints } }) => breakpoints.small_desktop}) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (min-width: ${({ theme: { breakpoints } }) => breakpoints.large_desktop}) {
    grid-template-columns: repeat(5, 1fr);
  }
`;
