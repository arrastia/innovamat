import styled from 'styled-components';

const Card = styled('div')`
  background: #ffffff;
  border-radius: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);

  cursor: pointer;
  width: 100%;
  padding: 0.75rem;

  .image {
    width: 100%;
    border-radius: var(--card-border-radius);
  }

  .title {
    padding: 0.2rem 0;
  }

  .title,
  .description {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
    margin: 0px;
  }

  .description {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    color: var(--font-dark-grey);
    min-height: 2rem;
  }
`;

export const Styles = { Card };
