import { Styles } from './Panel.styles';

import { Accordion } from 'ui/_components/Accordion';
import { Button } from 'ui/_components/Button';

import { useInputTags } from 'ui/_tools/Hooks/useInputTags';

import type { PanelProps } from './@types/Panel.types';

export const Panel = ({ isVisible }: PanelProps) => {
  const { createTag } = useInputTags();

  return (
    <Styles.Panel isVisible={isVisible}>
      <Accordion title="Realizable en">
        <Button label="holi" onClick={() => createTag('holi')} />
        <Button label="holi" />
      </Accordion>
      <Accordion title="Curso">Hola</Accordion>
      <Accordion title="Dinámicas del aula">Hola</Accordion>
      <Accordion title="Bloques de contenido">Hola</Accordion>
    </Styles.Panel>
  );
};
