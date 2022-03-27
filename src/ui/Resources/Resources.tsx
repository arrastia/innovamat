import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { Styles } from './Resources.styles';

import { Card } from 'ui/_components/Card';
import { MySkeleton } from 'ui/_components/MySkeleton';

import { resourcesState } from 'ui/_tools/Stores/ResourcesStore';

import { NavigationUtils } from 'ui/_tools/Utils/NavigationUtils';

import type { ResourceTagType } from 'core/entities/Resource';
import { useLocale } from 'ui/_tools/Hooks/useLocale';
import { Suspense, useState } from 'react';
import { useMedia } from 'ui/_tools/Hooks/useMedia';

const { parseURL } = NavigationUtils;

export const Resources = () => {
  const navigate = useNavigate();

  const { tag } = useParams();

  const messages = useLocale();

  const resources = useRecoilValue(resourcesState(tag as ResourceTagType));

  const [isLiked, setIsLiked] = useState(false);

  const renderSection = (sectionName: string, resources: any[]) => {
    return (
      <section key={sectionName}>
        <h3>{sectionName}</h3>
        <hr style={{ border: '0', borderTop: '1px solid #C5D6D5', height: '2px' }} />

        <Styles.CardSection>
          {resources.map(resource => {
            return (
              <Card
                description={resource.description}
                id={`${resource.id}_${sectionName}`}
                image={resource.image}
                isLiked={true}
                key={`${resource.id}_${sectionName}`}
                onCardClick={() => navigate(parseURL({ url: ':resourceId', params: { resourceId: resource.id } }))}
                title={resource.title}
                toggleLike={function (): void {
                  throw new Error('Function not implemented.');
                }}
              />
            );
          })}
        </Styles.CardSection>
      </section>
    );
  };

  return (
    <Styles.ResourcesStyles>
      <Styles.Title>{messages['talleres']}</Styles.Title>
      {/* <MySkeleton count={10} /> */}
      {resources.map(resource => renderSection(resource.sectionName, resource.resources))}
    </Styles.ResourcesStyles>
  );
};
