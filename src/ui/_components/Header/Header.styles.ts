import styled from 'styled-components';

import { Row } from 'ui/_styles/components/Row';

const SearchWrapper = styled(Row)`
  background: white;
  border-radius: 10px;
  gap: 0;
  width: 100%;

  @media screen and (min-width: ${({ theme: { breakpoints } }) => breakpoints.tablet}) {
    background: transparent;
  }
`;

const Header = styled('header')`
  align-items: center;
  background-color: ${({ theme: { colors } }) => colors.grey};
  display: flex;
  flex-shrink: 0;
  gap: 1rem;
  justify-content: center;
  padding: 0.5rem 1rem;
  position: relative;
  width: 100%;
  z-index: 1;

  @media screen and (min-width: ${({ theme: { breakpoints } }) => breakpoints.tablet}) {
    background-color: ${({ theme: { colors } }) => colors.white};
    margin-bottom: 33px;
  }
`;

export const Styles = { Header, SearchWrapper };
