import styled from 'styled-components';

const Filters = styled('div')`
  background: white;
  order: 3;
  position: relative;

  @media screen and (min-width: ${({ theme: { breakpoints } }) => breakpoints.tablet}) {
    display: flex;
    flex-grow: 1;
    gap: 0;
    order: 1;
  }
`;

export const Styles = { Filters };
