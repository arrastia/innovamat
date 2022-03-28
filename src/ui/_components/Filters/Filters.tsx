import { useState } from 'react';

import { Styles } from './Filters.styles';

import { FiltersButton } from './_components/FiltersButton';
import { Panel } from './_components/Panel';

export const Filters = () => {
  const [isPanelVisible, setIsPanelVisible] = useState(false);

  const toggleFiltersPanel = () => setIsPanelVisible(prevState => !prevState);

  return (
    <Styles.Filters>
      <FiltersButton isPanelVisible={isPanelVisible} onClick={toggleFiltersPanel} />

      <Panel isVisible={isPanelVisible} />
    </Styles.Filters>
  );
};
