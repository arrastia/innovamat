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
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  margin: 1rem 0;
  width: 100%;

  display: grid;
  grid-template-columns: 1fr;

  /* @media (min-width: 375px) {
    grid-gap: 1.2rem;
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 500px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (min-width: 1080px) {
    grid-template-columns: repeat(5, 1fr);
  }
  @media (min-width: 1250px) {
    grid-gap: 1.4rem;
  } */
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
