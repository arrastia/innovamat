import { useState } from 'react';

import { Styles } from './ErrorFallback.styles';

import { errorBoundaryImage } from 'assets/images';

import { Button } from 'ui/_components/Button';

import { useLocale } from 'ui/_tools/Hooks/useLocale';

import type { FallbackProps } from 'react-error-boundary';

export const ErrorFallback = ({ error }: FallbackProps) => {
  const [isErrorStackVisible, setIsErrorStackVisible] = useState(false);

  const messages = useLocale();

  return (
    <Styles.Content>
      <Styles.Title>{messages['errorBoundaryTitle']}</Styles.Title>
      <Styles.ImageWrapper>
        <Styles.ErrorMessage>{error.message}</Styles.ErrorMessage>
        <Styles.ErrorImage alt="error_image" src={errorBoundaryImage} />
      </Styles.ImageWrapper>

      <Button label={messages['errorBoundaryShowMoreLogsLabel']} onClick={() => setIsErrorStackVisible(prevState => !prevState)} size="large" />
      {isErrorStackVisible && error.stack}
    </Styles.Content>
  );
};
