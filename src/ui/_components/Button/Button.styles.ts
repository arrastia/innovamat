import styled from 'styled-components';

import { Button as ButtonStyles } from 'ui/_styles/components/Button';

const Button = styled(ButtonStyles)`
  padding: 0.5rem;

  &.primary {
    background: ${({ theme }) => theme.colors.primary};
    color: white;
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
  &.selected {
    background-color: ${({ theme }) => theme.colors.darkGrey};
  }
  &.unselected {
    background-color: ${({ theme }) => theme.colors.lightGrey};
  }
  &.disabled {
    opacity: 0.5;
    pointer-events: none;
  }

  &.large {
    height: 40px;
    width: 256px;
    justify-content: center;
    gap: 0.5rem;

    span {
      font-size: large;
    }
  }
  &.medium {
    height: 24px;
    width: 100px;
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
  font-size: 12px;
`;

export const Styles = { Button, Icon, Text };
