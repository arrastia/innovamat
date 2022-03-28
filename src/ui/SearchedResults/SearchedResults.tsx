import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { Styles } from './SearchedResults.styles';

import { Card } from 'ui/_components/Card';

import { searchedResourcesState } from 'ui/_tools/Stores/ResourcesStore';

import { useLocale } from 'ui/_tools/Hooks/useLocale';

export const SearchedResults = () => {
  const navigate = useNavigate();
  const resources = useRecoilValue(searchedResourcesState);

  const messages = useLocale();

  return (
    <Styles.View>
      <h2>{messages['searchedResultsTitle']}</h2>

      <Styles.Cards>
        {resources.map(resource => (
          <Card
            description={resource.description}
            id={resource.id}
            image={resource.image}
            key={resource.id}
            onCardClick={() => navigate(`/recursos/${resource.tag?.toLowerCase()}/${resource.id}`)}
            title={resource.title}
          />
        ))}
      </Styles.Cards>
    </Styles.View>
  );
};
