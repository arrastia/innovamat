import styled from 'styled-components';

import { heart } from 'assets/icons/index';
import { heartPulse, heartUnlike } from './animations.styles';

const LikeButtonWrapper = styled('div')<{ isLiked: boolean }>`
  .middle-wrapper {
    align-items: center;
    display: flex;
    justify-content: center;
    width: 100%;
  }

  .like-wrapper {
    display: flex;
    justify-content: space-around;
    flex-flow: row wrap;
  }

  .like-button {
    cursor: pointer;
    align-items: center;
    border: none;
    color: ${({ isLiked, theme }) => (isLiked ? theme.colors.primary : theme.colors.darkGrey)};
    display: flex;

    background: ${({ theme }) => theme.colors.transparent};
    filter: grayscale(1);
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0em;
    line-height: 14px;
    padding: 1rem;
    text-align: left;
    transition: all 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    user-select: none;

    &.liked {
      filter: grayscale(0);
    }

    &:hover {
      border-color: currentColor;
    }
  }

  .like-icon {
    animation: ${heartUnlike} 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275) both;
    background: url(${heart}) no-repeat center;
    background-size: 100%;
    display: inline-block;
    font-size: 1.5rem;
    height: 16px;
    margin-right: 0.25em;
    position: relative;
    width: 18px;
    /* filter: grayscale(1) brightness(2); */
  }

  .liked .like-icon {
    animation: ${heartPulse} 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275) both;

    [class^='heart-animation-'] {
      background: url(${heart}) no-repeat center;
      background-size: 100%;
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 16px;
      height: 14px;
      opacity: 0;

      &::before,
      &::after {
        content: '';
        background: inherit;
        background-size: 100%;
        width: inherit;
        height: inherit;
        display: inherit;
        position: relative;
        top: inherit;
        left: inherit;
        opacity: 0;
      }
    }

    .heart-animation-1 {
      animation: heartFloatMain-1 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) both;

      &::before,
      &::after {
        width: 12px;
        height: 10px;
        visibility: hidden;
      }
      &::before {
        opacity: 0.6;
        animation: heartFloatSub-1 1s 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275) both;
      }
      &::after {
        animation: heartFloatSub-2 1s 0.15s cubic-bezier(0.175, 0.885, 0.32, 1.275) both;
        opacity: 0.75;
      }
    }

    .heart-animation-2 {
      animation: heartFloatMain-2 1s 0.1s cubic-bezier(0.175, 0.885, 0.32, 1.275) both;

      &::before,
      &::after {
        width: 10px;
        height: 8px;
        visibility: hidden;
      }
      &::before {
        animation: heartFloatSub-3 1s 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275) both;
        opacity: 0.25;
      }
      &::after {
        animation: heartFloatSub-4 1s 0.15s cubic-bezier(0.175, 0.885, 0.32, 1.275) both;
        opacity: 0.4;
      }
    }
  }

  // Animations
  /* @keyframes heartPulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.5);
    }
  } */

  /* @keyframes heartUnlike {
    50% {
      transform: scale(0.75);
    }
  } */

  @keyframes heartFloatMain-1 {
    0% {
      opacity: 0;
      transform: translate(0) rotate(0);
    }
    50% {
      opacity: 1;
      transform: translate(0, -25px) rotate(-20deg);
    }
  }

  @keyframes heartFloatMain-2 {
    0% {
      opacity: 0;
      transform: translate(0) rotate(0) scale(0);
    }
    50% {
      opacity: 0.9;
      transform: translate(-10px, -38px) rotate(25deg) scale(1);
    }
  }

  @keyframes heartFloatSub-1 {
    0% {
      visibility: hidden;
      transform: translate(0) rotate(0);
    }
    50% {
      visibility: visible;
      transform: translate(13px, -13px) rotate(30deg);
    }
  }

  @keyframes heartFloatSub-2 {
    0% {
      visibility: hidden;
      transform: translate(0) rotate(0);
    }
    50% {
      visibility: visible;
      transform: translate(18px, -10px) rotate(55deg);
    }
  }

  @keyframes heartFloatSub-3 {
    0% {
      visibility: hidden;
      transform: translate(0) rotate(0);
    }
    50% {
      visibility: visible;
      transform: translate(-10px, -10px) rotate(-40deg);
    }
    100% {
      transform: translate(-50px, 0);
    }
  }

  @keyframes heartFloatSub-4 {
    0% {
      visibility: hidden;
      transform: translate(0) rotate(0);
    }
    50% {
      visibility: visible;
      transform: translate(2px, -18px) rotate(-25deg);
    }
  }
`;

export const Styles = { LikeButtonWrapper };
