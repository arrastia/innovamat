import { notFound } from 'assets/images';
import { routes } from 'configuration/routes';
import { useNavigate } from 'react-router-dom';
import { Button } from 'ui/_components/Button';
import { useLocale } from 'ui/_tools/Hooks/useLocale';
import { Styles } from './NotFound.styles';

export const NotFound = () => {
  const navigate = useNavigate();

  const messages = useLocale();

  return (
    <Styles.NotFoundWrapper>
      <Styles.TextWrapper>
        <h1>{messages['notFoundTitle']}</h1>
        <p>{messages['notFoundText']}</p>
        <Button label={messages['notFoundButton']} onClick={() => navigate(routes.HOME)}></Button>
      </Styles.TextWrapper>
      <Styles.ImageWrapper>
        <Styles.Image alt="" src={notFound} />
      </Styles.ImageWrapper>
    </Styles.NotFoundWrapper>
  );
};
