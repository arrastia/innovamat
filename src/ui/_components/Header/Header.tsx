import { useNavigate } from 'react-router-dom';

import { Styles } from './Header.styles';

import { SearchIcon } from 'assets/icons';

import { Button } from 'ui/_components/Button';
import { Filters } from 'ui/_components/Filters';
import { Input } from 'ui/_components/Input';

import { useBreakpoints } from 'ui/_tools/Hooks/useBreakpoints';

export const Header = () => {
  const navigate = useNavigate();

  const { isPhone } = useBreakpoints();

  return (
    <Styles.Header>
      <Styles.SearchWrapper>
        <Filters />
        <Input />
        <Button
          icon={<SearchIcon isActive={isPhone} />}
          label={!isPhone ? 'Busqueda' : undefined}
          onClick={() => navigate('search')}
          size={!isPhone ? 'large' : undefined}
          style={!isPhone ? { order: 3 } : { order: 2 }}
          type={!isPhone ? 'primary' : 'transparent'}
        />
      </Styles.SearchWrapper>
    </Styles.Header>
  );
};
