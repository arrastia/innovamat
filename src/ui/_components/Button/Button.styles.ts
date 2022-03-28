import styled from 'styled-components';

import { Button } from 'ui/_styles/components/Button';

const ButtonWrapper = styled(Button)`
  padding: 0.5rem;

  &.primary {
    background: ${({ theme: { colors } }) => colors.primary};
    color: ${({ theme: { colors } }) => colors.white};
  }
  &.secondary {
    background-color: ${({ theme: { colors } }) => colors.secondary};
  }
  &.delete {
    background-color: ${({ theme: { colors } }) => colors.error};
  }
  &.transparent {
    background-color: ${({ theme: { colors } }) => colors.transparent};
  }
  &.selected {
    background-color: ${({ theme: { colors } }) => colors.darkGrey};
  }
  &.unselected {
    background-color: ${({ theme: { colors } }) => colors.lightGrey};
  }
  &.disabled {
    opacity: 0.5;
    pointer-events: none;
  }

  &.large {
    gap: 0.5rem;
    justify-content: center;
    max-height: 40px;
    border: 1px solid;
    border-color: ${({ theme: { colors } }) => colors.primary};
    width: 256px;

    span {
      font-size: large;
    }
  }
  &.medium {
    height: 24px;
    width: 100px;
  }
`;

const Icon = styled('span')`
  align-items: center;
  display: flex;
  font-size: x-large;
`;

const Text = styled('span')`
  font-size: large;
  line-height: normal;
  font-size: 12px;
`;

export const Styles = { ButtonWrapper, Icon, Text };
