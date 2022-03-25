import styled from 'styled-components';

const ResourcesStyles = styled.div`
  overflow: hidden auto;
  position: relative;
  width: 100%;
  padding: 1rem;
`;

const Title = styled('h2')`
  padding-left: 1rem;
  padding-top: 1rem;
`;

const CardSection = styled('div')`
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: 420px) {
    grid-gap: 1.2rem;
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1000px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1300px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (min-width: 1450px) {
    grid-template-columns: repeat(5, 1fr);
  }
  @media (min-width: 1600px) {
    grid-gap: 1.4rem;
  }
`;

export const Styles = { ResourcesStyles, Title, CardSection };