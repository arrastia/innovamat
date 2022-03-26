import { useState } from 'react';

import { Styles } from './Filters.styles';

import { Button } from 'ui/_components/Button';
import { Panel } from './_components/Panel';
import { useRecoilState } from 'recoil';
import { isFilterPanelOpenState } from 'ui/_tools/Stores/SearchStore';

export const Filters = () => {
  // const [isPanelVisible, setIsPanelVisible] = useState(false);

  const [isPanelVisible, setIsPanelVisible] = useRecoilState(isFilterPanelOpenState);

  const toggleFiltersPanel = () => setIsPanelVisible(prevState => !prevState);

  return (
    <Styles.Filters>
      <Button label="Filtros" onClick={toggleFiltersPanel} type="primary" />

      <Panel isVisible={isPanelVisible} />
    </Styles.Filters>
  );
};
