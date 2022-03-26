import styled from 'styled-components';

import { Button as ButtonStyles } from 'ui/_styles/components/Button';

const Button = styled(ButtonStyles)`
  border-radius: 10px;
  padding: 0.5rem;
  /* color: ${({ theme }) => theme.colors.white};
  height: 40px;
  width: 256px; */

  &.primary {
    background: ${({ theme }) => theme.colors.primary};
  }
  &.secondary {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
  &.delete {
    background-color: ${({ theme }) => theme.colors.error};
  }
  &.transparent {
    background-color: ${({ theme }) => theme.colors.transparent};
  }
  &.disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`;

const Icon = styled('span')<{ iconSize?: number }>`
  align-items: center;
  display: flex;
  font-size: x-large;

  svg,
  img {
    height: ${({ iconSize }) => `${iconSize}rem` || '2rem'};
    width: ${({ iconSize }) => `${iconSize}rem` || '2rem'};
  }
`;

const Text = styled('span')`
  font-size: large;
  line-height: normal;
`;

export const Styles = { Button, Icon, Text };
