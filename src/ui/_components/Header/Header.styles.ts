import styled from 'styled-components';

import { Row } from 'ui/_styles/components/Row';

const SearchWrapper = styled(Row)`
  gap: 0;
  position: relative;
  width: 100%;
`;

const Header = styled('header')`
  align-items: center;
  display: flex;
  flex-shrink: 0;
  gap: 1rem;
  justify-content: space-between;
  position: relative;
  width: 100%;
  z-index: 1;
`;

export const Styles = { Header, SearchWrapper };
