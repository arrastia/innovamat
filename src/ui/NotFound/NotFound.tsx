import { useNavigate } from 'react-router-dom';

import { Styles } from './NotFound.styles';

import { notFound } from 'assets/images';

import { routes } from 'configuration/routes';

import { Button } from 'ui/_components/Button';

import { useFountain } from 'ui/_tools/Hooks/useFountain';
import { useLocale } from 'ui/_tools/Hooks/useLocale';

export const NotFound = () => {
  const navigate = useNavigate();

  const messages = useLocale();

  useFountain();

  return (
    <Styles.NotFoundWrapper>
      <Styles.TextWrapper>
        <h1>{messages['notFoundTitle']}</h1>
        <p>{messages['notFoundText']}</p>
        <Button label={messages['notFoundButton']} onClick={() => navigate(routes.HOME)} size="large" />
      </Styles.TextWrapper>
      <Styles.NotFoundImage alt="404-not-found-image" id="fountain-animation-id" src={notFound} />
    </Styles.NotFoundWrapper>
  );
};
