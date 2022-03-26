import { useState } from 'react';

import { Styles } from './Filters.styles';

import { SettingsIcon } from 'assets/icons';

import { Button } from 'ui/_components/Button';
import { Panel } from './_components/Panel';

export const Filters = () => {
  const [isPanelVisible, setIsPanelVisible] = useState(false);

  const toggleFiltersPanel = () => setIsPanelVisible(prevState => !prevState);

  return (
    <Styles.Filters>
      <Button icon={<SettingsIcon />} onClick={toggleFiltersPanel} type="transparent" />

      <Panel isVisible={isPanelVisible} />
    </Styles.Filters>
  );
};
