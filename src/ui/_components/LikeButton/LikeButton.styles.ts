import styled from 'styled-components';

import { heart } from 'assets/icons/index';

import { unlike, pulse, nestedFloat, floatPrimary, floatSecondary } from 'ui/_styles/animations/heart';

const LikeButton = styled('button')`
  align-items: center;
  background-color: ${({ theme: { colors } }) => colors.transparent};
  border: none;
  color: ${({ theme: { colors } }) => colors.darkGrey};
  cursor: pointer;
  display: flex;
  filter: grayscale(1);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0em;
  line-height: 14px;
  padding: 0.5rem 0;
  text-align: left;
  transition: all 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  user-select: none;

  &.liked {
    color: ${({ theme: { colors } }) => colors.primary};
    filter: grayscale(0);
  }

  &:hover {
    border-color: currentColor;
  }
`;

const LikeIcon = styled('div')`
  animation: ${unlike} 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275) both;
  background: url(${heart}) no-repeat center;
  background-size: 100%;
  display: inline-block;
  font-size: 1.5rem;
  height: 16px;
  margin-right: 0.25em;
  position: relative;
  width: 18px;

  .liked & {
    animation: ${pulse} 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275) both;

    [class^='heart-animation-'] {
      background: url(${heart}) no-repeat center;
      background-size: 100%;
      display: block;
      height: 14px;
      left: 0;
      opacity: 0;
      position: absolute;
      top: 0;
      width: 16px;

      &::before,
      &::after {
        content: '';
        background: inherit;
        background-size: 100%;
        display: inherit;
        height: inherit;
        left: inherit;
        opacity: 0;
        position: relative;
        top: inherit;
        width: inherit;
      }
    }

    .heart-animation-1 {
      animation: ${floatPrimary} 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) both;

      &::before,
      &::after {
        height: 10px;
        visibility: hidden;
        width: 12px;
      }
      &::before {
        animation: ${nestedFloat(1)} 1s 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275) both;
        opacity: 0.6;
      }
      &::after {
        animation: ${nestedFloat(2)} 1s 0.15s cubic-bezier(0.175, 0.885, 0.32, 1.275) both;
        opacity: 0.75;
      }
    }

    .heart-animation-2 {
      animation: ${floatSecondary} 1s 0.1s cubic-bezier(0.175, 0.885, 0.32, 1.275) both;

      &::before,
      &::after {
        height: 8px;
        visibility: hidden;
        width: 10px;
      }
      &::before {
        animation: ${nestedFloat(3)} 1s 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275) both;
        opacity: 0.25;
      }
      &::after {
        animation: ${nestedFloat(4)} 1s 0.15s cubic-bezier(0.175, 0.885, 0.32, 1.275) both;
        opacity: 0.4;
      }
    }
  }
`;

const LikeButtonWrapper = styled('div')<{ isLiked: boolean }>`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
`;

export const Styles = { LikeButton, LikeButtonWrapper, LikeIcon };
