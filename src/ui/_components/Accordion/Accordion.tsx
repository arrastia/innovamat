import { FC, useState } from 'react';

import { Styles } from './Accordion.styles';

import { ArrowIcon } from 'assets/icons';

import { Button } from 'ui/_components/Button';

import type { IAccordion } from './@types/Accordion.types';

export const Accordion: FC<IAccordion> = ({ children, title }) => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => setIsVisible(prevState => !prevState);

  return (
    <Styles.Accordion>
      <Styles.AccordionTitle>
        <h3>{title}</h3>
        <Button icon={<ArrowIcon isActive={isVisible} />} onClick={toggleVisibility} type="transparent" />
      </Styles.AccordionTitle>
      <Styles.AccordionContent isVisible={isVisible}>{children}</Styles.AccordionContent>
    </Styles.Accordion>
  );
};
