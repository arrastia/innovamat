import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { Styles } from './Resources.styles';

import { Section } from './_components/Section';

import { resourcesState } from 'ui/_tools/Stores/ResourcesStore';

import { useLocale } from 'ui/_tools/Hooks/useLocale';

import type { ResourceTagType } from 'core/entities/Resource';

export const Resources = () => {
  const { tag } = useParams();

  const sections = useRecoilValue(resourcesState(tag as ResourceTagType));

  const messages = useLocale();

  return (
    <Styles.Content>
      <Styles.Title>{messages[tag as ResourceTagType]}</Styles.Title>
      {sections.map(section => (
        <Section key={section.sectionName} resources={section.resources} title={section.sectionName} />
      ))}
    </Styles.Content>
  );
};
