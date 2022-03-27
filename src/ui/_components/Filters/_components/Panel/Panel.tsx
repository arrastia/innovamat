import { Styles } from './Panel.styles';

import { Accordion } from 'ui/_components/Accordion';
import { Button } from 'ui/_components/Button';

import { useInputTags } from 'ui/_tools/Hooks/useInputTags';

import type { PanelProps } from './@types/Panel.types';
import { PanelButton } from './_components/PanelButton';

export const Panel = ({ isVisible }: PanelProps) => {
  const { createTag } = useInputTags();

  const filters = [
    {
      id: 'filter-1',
      label: 'Realizable en',
      buttons: [
        { id: 'Escuela', label: 'Escuela' },
        { id: 'Casa', label: 'Casa' }
      ]
    },
    {
      id: 'filter-2',
      label: 'Curso',
      buttons: [
        { id: 'p3', label: 'p3' },
        { id: 'p4', labels: 'p4' },
        { id: 'p5', labels: 'p5' },
        { id: '1r', labels: '1r' },
        { id: '2n', labels: '2n' },
        { id: '3r', labels: '3r' },
        { id: '4t', labels: '4t' },
        { id: '5e', labels: '5e' },
        { id: '6e', labels: '6e' }
      ]
    },
    {
      id: 'filter-3',
      label: 'Dinámicas del aula',
      buttons: [
        { id: 'Talleres', label: 'Talleres' },
        { id: 'Rutinas', label: 'Rutinas' },
        { id: 'Rincones', label: 'Rincones' },
        { id: 'Ambientes', label: 'Ambientes' }
      ]
    },
    {
      id: 'filter-4',
      label: 'Bloques de contenido',
      buttons: [
        { id: 'Numeración', label: 'Numeración' },
        { id: 'Calculo', label: 'Calculo' },
        { id: 'Medidas', label: 'Medidas' }
      ]
    }
  ];

  return (
    <Styles.Panel isVisible={isVisible}>
      <Accordion title="Realizable en">
        {['Casa', 'Escuela'].map(label => (
          <PanelButton id={label} key={label} label={label} size="medium" />
        ))}
      </Accordion>
      <Accordion title="Curso">
        {['p3', 'p4', 'p5', '1r', '2n', '3r', '4t', '5e', '6e'].map(label => (
          <PanelButton id={label} key={label} label={label} />
        ))}
      </Accordion>
      <Accordion title="Dinámicas del aula">
        {['Talleres', 'Rutinas', 'Rincones', 'Ambientes'].map(label => (
          <PanelButton id={label} key={label} label={label} size="medium" />
        ))}
      </Accordion>
      <Accordion title="Bloques de contenido">
        {['Numeración', 'Calculo', 'Medidas'].map(label => (
          <PanelButton id={label} key={label} label={label} size="medium" />
        ))}
      </Accordion>
    </Styles.Panel>
  );
};
