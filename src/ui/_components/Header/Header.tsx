import { Styles } from './Header.styles';

import { Button } from 'ui/_components/Button';
import { Filters } from 'ui/_components/Filters';
import { SearchInput } from 'ui/_components/SearchInput';

export const Header = () => {
  return (
    <Styles.Header>
      <Styles.SearchWrapper>
        <Filters />
        <SearchInput />
      </Styles.SearchWrapper>
      <Button label="Buscar" onClick={() => {}} type="primary" />
    </Styles.Header>
  );
};
