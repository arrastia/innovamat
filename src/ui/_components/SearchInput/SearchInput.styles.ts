import styled from 'styled-components';

const SearchInput = styled('input')`
  border-radius: 0 10px 10px 0;
  border: 1px solid #e3e3e3;
  height: 40px;
  outline: none;
  padding: 0.5em 3em;
  width: 100%;

  &::placeholder {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 19px;
  }
`;

export const Styles = { SearchInput };
