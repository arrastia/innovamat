import { Styles } from './Panel.styles';

import { Accordion } from 'ui/_components/Accordion';
import { PanelButton } from './_components/PanelButton';

import type { PanelProps } from './@types/Panel.types';

export const Panel = ({ isVisible }: PanelProps) => (
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
