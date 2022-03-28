import styled from 'styled-components';

import { Button } from 'ui/_styles/components/Button';
import { Row } from 'ui/_styles/components/Row';

const FiltersButton = styled(Button)`
  background-color: ${({ theme: { colors } }) => colors.white};
  cursor: pointer;
  gap: 1rem;
  height: 40px;
  justify-content: center;
  padding: 0.5rem;

  .filter-button-icon {
    transform: rotate(180deg);
    transition: transform 300ms ease-in-out;

    &.visible {
      transform: rotate(0deg);
      transition: transform 300ms ease-in-out;
    }
  }

  @media screen and (min-width: ${({ theme: { breakpoints } }) => breakpoints.tablet}) {
    border: 1px solid;
    border-color: ${({ theme: { colors } }) => colors.grey};
    border-radius: 5px 0 0 5px;
    border-right: none;
    width: calc(16rem - 1rem);
  }
`;

const Label = styled('span')`
  color: ${({ theme: { colors } }) => colors.darkGrey};
  cursor: pointer;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0em;
  line-height: 19px;
`;

const LabelWrapper = styled(Row)`
  display: none;

  @media screen and (min-width: ${({ theme: { breakpoints } }) => breakpoints.tablet}) {
    display: flex;
  }
`;

export const Styles = { FiltersButton, Label, LabelWrapper };
