import styled from 'styled-components';
import { Column } from 'ui/_styles/components/Column';

const Favorite = styled('span')`
  opacity: 1;
`;

const Card = styled('div')`
  background: #ffffff;
  border-radius: 5px;
  cursor: pointer;
  /* justify-content: center; */
  padding: 0.75rem;
  transition: all 100ms ease-in;

  /* @media (min-width: 420px) {
    width: 300px;
  } */

  &:hover {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    transform: scale(1.01);
    transition: all 100ms ease-in;

    & ${Favorite} {
      opacity: 1;
    }
  }

  &:active {
    transform: scale(0.99);
  }

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
    letter-spacing: 0em;
    line-height: 16px;
    margin: 0px;
    text-align: left;
  }

  .description {
    color: #a3b7b5;
    display: -webkit-box;
    min-height: 2rem;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }
`;

export const Styles = { Card, Favorite };
