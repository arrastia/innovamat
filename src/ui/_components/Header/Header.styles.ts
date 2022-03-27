import styled from 'styled-components';

import { Row } from 'ui/_styles/components/Row';

const SearchWrapper = styled(Row)`
  /* gap: 0; */
  /* position: relative; */
  background: white;
  border-radius: 10px;
  gap: 0;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    background: transparent;
    gap: 14px;
  }
`;

const Header = styled('header')`
  align-items: center;
  background: #ededed;
  display: flex;
  flex-shrink: 0;
  gap: 1rem;
  padding: 0.5rem 1rem;
  justify-content: center;
  position: relative;
  width: 100%;
  z-index: 1;
`;

export const Styles = { Header, SearchWrapper };
