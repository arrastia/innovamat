import styled from 'styled-components';

const Input = styled('input')`
  border: none;
  outline: none;
  padding: 0.5rem;
  width: fit-content;
`;

const InputWrapper = styled('div')`
  align-items: center;
  background: white;
  border-radius: 5px;
  display: flex;
  gap: 0.5rem;
  overflow: auto hidden;
  padding: 0.5rem;
  position: relative;
  width: 100%;

  @media screen and (min-width: ${({ theme: { breakpoints } }) => breakpoints.tablet}) {
    border: 1px solid;
    border-color: ${({ theme: { colors } }) => colors.grey};
    border-radius: 0 5px 5px 0;
    height: 40px;
    margin-right: 14px;
    order: 2;
    padding: 0.25rem;
  }
`;

export const Styles = { Input, InputWrapper };
