import { Styles } from './Header.styles';

import { Button } from 'ui/_components/Button';
import { Filters } from 'ui/_components/Filters';
import { SearchInput } from 'ui/_components/SearchInput';
import { Panel } from '../Filters/_components/Panel';
import { useRecoilValue } from 'recoil';
import { isFilterPanelOpenState } from 'ui/_tools/Stores/SearchStore';

export const Header = () => {
  return (
    <>
      <Styles.Header>
        <Filters />
        <SearchInput />
        {/* <Button label="Buscar" onClick={() => {}} type="primary" /> */}
      </Styles.Header>

      {/* <Panel isVisible={isPanelVisible} /> */}
    </>
  );
};
