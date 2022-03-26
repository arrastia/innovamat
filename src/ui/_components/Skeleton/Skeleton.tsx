import { FC, isValidElement } from 'react';
import type { ISkeleton } from './@types/Skeleton.types';

export const Skeleton: FC<ISkeleton> = ({
  animate,
  animateBegin,
  backgroundColor,
  backgroundOpacity,
  baseUrl,
  beforeMask,
  children,
  foregroundColor,
  foregroundOpacity,
  gradientDirection,
  gradientRatio = 2,
  interval,
  rtl,
  speed,
  style,
  title,
  id,
  uniqueKey,
  ...props
}) => {
  const fixedId = uniqueKey || 'skeleton-' + id;
  const idClip = `${fixedId}-diff`;
  const idGradient = `${fixedId}-animated-diff`;
  const idAria = `${fixedId}-aria`;

  const rtlStyle = rtl ? { transform: 'scaleX(-1)' } : null;
  const keyTimes = `0; ${interval}; 1`;
  const dur = `${speed}s`;
  const gradientTransform = gradientDirection === 'top-bottom' ? 'rotate(90)' : undefined;

  return (
    <svg aria-labelledby={idAria} role="img" style={{ ...style, ...rtlStyle }} {...props}>
      {title ? <title id={idAria}>{title}</title> : null}
      {beforeMask && isValidElement(beforeMask) ? beforeMask : null}
      <rect
        clipPath={`url(${baseUrl}#${idClip})`}
        height="100%"
        role="presentation"
        style={{ fill: `url(${baseUrl}#${idGradient})` }}
        width="100%"
        x="0"
        y="0"
      />

      <defs>
        <clipPath id={idClip}>{children}</clipPath>

        <linearGradient gradientTransform={gradientTransform} id={idGradient}>
          <stop offset="0%" stopColor={backgroundColor} stopOpacity={backgroundOpacity}>
            {animate && (
              <animate
                attributeName="offset"
                begin={animateBegin}
                dur={dur}
                keyTimes={keyTimes}
                repeatCount="indefinite"
                values={`${-gradientRatio}; ${-gradientRatio}; 1`}
              />
            )}
          </stop>

          <stop offset="50%" stopColor={foregroundColor} stopOpacity={foregroundOpacity}>
            {animate && (
              <animate
                attributeName="offset"
                begin={animateBegin}
                dur={dur}
                keyTimes={keyTimes}
                repeatCount="indefinite"
                values={`${-gradientRatio / 2}; ${-gradientRatio / 2}; ${1 + gradientRatio / 2}`}
              />
            )}
          </stop>

          <stop offset="100%" stopColor={backgroundColor} stopOpacity={backgroundOpacity}>
            {animate && (
              <animate
                attributeName="offset"
                begin={animateBegin}
                dur={dur}
                keyTimes={keyTimes}
                repeatCount="indefinite"
                values={`0; 0; ${1 + gradientRatio}`}
              />
            )}
          </stop>
        </linearGradient>
      </defs>
    </svg>
  );
};

Skeleton.defaultProps = {
  animate: true,
  backgroundColor: '#f5f6f7',
  backgroundOpacity: 1,
  baseUrl: '',
  beforeMask: undefined,
  foregroundColor: '#eee',
  foregroundOpacity: 1,
  gradientDirection: 'left-right',
  gradientRatio: 2,
  id: 'pablo',
  interval: 0.25,
  rtl: false,
  speed: 1.2,
  style: {},
  title: 'Loading...'
};
