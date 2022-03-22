import styled from 'styled-components';

const Input = styled('input')`
  border: none;
  outline: none;
  padding: 0.5rem;
`;

const InputWrapper = styled('div')`
  align-items: center;
  background: white;
  border-radius: 5px;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: 0.5rem;
  position: relative;
  width: 100%;
`;

export const Styles = { Input, InputWrapper };
