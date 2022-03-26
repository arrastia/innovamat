/* eslint-disable react/no-array-index-key */
import React, { CSSProperties, ReactElement } from 'react';

import './skeleton.css';

export const SkeletonThemeContext = React.createContext<SkeletonStyleProps>({});

const defaultEnableAnimation = true;

// For performance & cleanliness, don't add any inline styles unless we have to
function styleOptionsToCssProperties({
  baseColor,
  borderRadius,
  circle,
  direction,
  duration,
  enableAnimation = defaultEnableAnimation,
  height,
  highlightColor,
  width
}: SkeletonStyleProps & { circle: boolean }): CSSProperties {
  const style: CSSProperties & Record<`--${string}`, string> = {};

  if (direction === 'rtl') style['--animation-direction'] = 'reverse';
  if (typeof duration === 'number') style['--animation-duration'] = `${duration}s`;
  if (!enableAnimation) style['--pseudo-element-display'] = 'none';

  if (typeof width === 'string' || typeof width === 'number') style.width = width;
  if (typeof height === 'string' || typeof height === 'number') style.height = height;

  if (typeof borderRadius === 'string' || typeof borderRadius === 'number') style.borderRadius = borderRadius;

  if (circle) style.borderRadius = '50%';

  if (typeof baseColor !== 'undefined') style['--base-color'] = baseColor;
  if (typeof highlightColor !== 'undefined') style['--highlight-color'] = highlightColor;

  return style;
}

export interface SkeletonStyleProps {
  baseColor?: string;
  borderRadius?: string | number;
  direction?: 'ltr' | 'rtl';
  duration?: number;
  enableAnimation?: boolean;
  height?: string | number;
  highlightColor?: string;
  inline?: boolean;
  width?: string | number;
}

export interface SkeletonProps extends SkeletonStyleProps {
  circle?: boolean;
  className?: string;
  containerClassName?: string;
  containerTestId?: string;
  count?: number;
  style?: CSSProperties;
  wrapper?: React.FunctionComponent;
}

export const MySkeleton = ({
  circle = false,
  className: customClassName,
  containerClassName,
  containerTestId,
  count = 1,
  style: styleProp,
  wrapper: Wrapper,
  ...originalPropsStyleOptions
}: SkeletonProps) => {
  const contextStyleOptions = React.useContext(SkeletonThemeContext);

  const propsStyleOptions = { ...originalPropsStyleOptions };

  // DO NOT overwrite style options from the context if `propsStyleOptions`
  // has properties explicity set to undefined
  for (const [key, value] of Object.entries(originalPropsStyleOptions)) {
    if (typeof value === 'undefined') {
      delete propsStyleOptions[key as keyof typeof propsStyleOptions];
    }
  }

  // Props take priority over context
  const styleOptions = {
    ...contextStyleOptions,
    ...propsStyleOptions,
    circle
  };

  // `styleProp` has the least priority out of everything
  const style = {
    ...styleProp,
    ...styleOptionsToCssProperties(styleOptions)
  };

  let className = 'react-loading-skeleton';
  if (customClassName) className += ` ${customClassName}`;

  const inline = styleOptions.inline ?? false;

  const elements: ReactElement[] = [];

  // Without the <br />, the skeleton lines will all run together if
  // `width` is specified
  for (let i = 0; i < count; i++) {
    const skeletonSpan = (
      <span className={className} style={style} key={i}>
        &zwnj;
      </span>
    );

    if (inline) {
      elements.push(skeletonSpan);
    } else {
      elements.push(
        <React.Fragment key={i}>
          {skeletonSpan}
          <br />
        </React.Fragment>
      );
    }
  }

  return (
    <span
      aria-busy={styleOptions.enableAnimation ?? defaultEnableAnimation}
      aria-live="polite"
      className={containerClassName}
      data-testid={containerTestId}>
      {Wrapper ? elements.map((el, i) => <Wrapper key={i}>{el}</Wrapper>) : elements}
    </span>
  );
};
