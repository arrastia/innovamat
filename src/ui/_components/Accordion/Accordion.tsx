import { FC, useState } from 'react';

import { Styles } from './Accordion.styles';

import { ArrowIcon } from 'assets/icons';

import { Button } from 'ui/_components/Button';

import type { AccordionProps } from './@types/Accordion.types';

export const Accordion: FC<AccordionProps> = ({ children, title }) => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => setIsVisible(prevState => !prevState);

  return (
    <Styles.Accordion isVisible={isVisible}>
      <Styles.Title isVisible={isVisible}>
        <h4>{title}</h4>
        <Button icon={<ArrowIcon className="accordion-arrow-icon" isActive={isVisible} />} onClick={toggleVisibility} type="transparent" />
      </Styles.Title>
      <Styles.Content isVisible={isVisible}>{children}</Styles.Content>
    </Styles.Accordion>
  );
};
