import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { Styles } from './Resources.styles';

import { Card } from 'ui/_components/Card';

import { resourcesState } from 'ui/_tools/Stores/ResourcesStore';

import { NavigationUtils } from 'ui/_tools/Utils/NavigationUtils';

import type { ResourceTagType } from 'core/entities/Resource';

const { parseURL } = NavigationUtils;

export const Resources = () => {
  const navigate = useNavigate();
  const { tag } = useParams();

  const resources = useRecoilValue(resourcesState(tag as ResourceTagType));

  const renderSection = (sectionName: string, resources: any[]) => {
    return (
      <div key={sectionName}>
        <h3>{sectionName}</h3>
        <hr style={{ borderColor: '#C5D6D5', borderStyle: '1px' }} />

        {resources.map(resource => {
          return (
            <Styles.CardSection key={`${resource.id}_${sectionName}`}>
              <Card
                description={resource.description}
                id={`${resource.id}_${sectionName}`}
                image={resource.image}
                isLiked={false}
                onCardClick={() => navigate(parseURL({ url: ':resourceId', params: { resourceId: resource.id } }))}
                title={resource.title}
                toggleLike={function (): void {
                  throw new Error('Function not implemented.');
                }}
              />
            </Styles.CardSection>
          );
        })}
      </div>
    );
  };

  return (
    <Styles.ResourcesStyles>
      <Styles.Title>{tag}</Styles.Title>
      {resources.map(resource => renderSection(resource.sectionName, resource.resources))}
    </Styles.ResourcesStyles>
  );
};
