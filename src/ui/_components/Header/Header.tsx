import { useNavigate } from 'react-router-dom';

import { Styles } from './Header.styles';

import { SearchIcon } from 'assets/icons';

import { Button } from 'ui/_components/Button';
import { Filters } from 'ui/_components/Filters';
import { Input } from 'ui/_components/Input';

import { useBreakpoints } from 'ui/_tools/Hooks/useBreakpoints';
import { useLocale } from 'ui/_tools/Hooks/useLocale';

export const Header = () => {
  const navigate = useNavigate();

  const messages = useLocale();

  const { isDesktop } = useBreakpoints();

  return (
    <Styles.Header>
      <Styles.SearchWrapper>
        <Filters />
        <Input />
        <Button
          icon={<SearchIcon isActive={!isDesktop} />}
          label={isDesktop ? messages['search'] : undefined}
          onClick={() => navigate('search')}
          size={isDesktop ? 'large' : undefined}
          style={isDesktop ? { order: 3 } : { order: 2 }}
          type={isDesktop ? 'primary' : 'transparent'}
        />
      </Styles.SearchWrapper>
    </Styles.Header>
  );
};
