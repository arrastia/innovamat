import { useNavigate } from 'react-router-dom';

import { Styles } from './Section.styles';

import { Card } from 'ui/_components/Card';

import type { SectionProps } from './@types/Section.types';

export const Section = ({ resources, title }: SectionProps) => {
  const navigate = useNavigate();

  return (
    <section>
      <h3>{title}</h3>
      <Styles.Divider />

      <Styles.CardSection>
        {resources.map(resource => (
          <Card
            description={resource.description}
            id={`${resource.id}`}
            image={resource.image}
            key={`${resource.id}`}
            onCardClick={() => navigate(resource.id)}
            title={resource.title}
          />
        ))}
      </Styles.CardSection>
    </section>
  );
};
