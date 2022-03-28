import { Styles } from './FiltersButton.styles';

import { ArrowIcon, SettingsIcon } from 'assets/icons';

import type { FilterButtonProps } from './@types/FiltersButton.types';

export const FiltersButton = ({ isPanelVisible, onClick }: FilterButtonProps) => (
  <Styles.FiltersButton onClick={onClick}>
    <Styles.LabelWrapper>
      <ArrowIcon className={`filter-button-icon ${isPanelVisible ? 'visible' : ''}`} isActive={isPanelVisible} />
      <Styles.Label>Filtros</Styles.Label>
    </Styles.LabelWrapper>
    <SettingsIcon />
  </Styles.FiltersButton>
);
