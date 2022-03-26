import { useNavigate } from 'react-router-dom';

import { Styles } from './Header.styles';

import { SearchIcon } from 'assets/icons';

import { Button } from 'ui/_components/Button';
import { Filters } from 'ui/_components/Filters';
import { Input } from 'ui/_components/Input';

export const Header = () => {
  const navigate = useNavigate();

  return (
    <Styles.Header>
      <Styles.SearchWrapper>
        <Filters />
        <Input />
        <Button icon={<SearchIcon />} onClick={() => navigate('search')} type="transparent" />
      </Styles.SearchWrapper>
    </Styles.Header>
  );
};
