import type { CSSProperties, SVGAttributes } from 'react';

export interface ISkeleton extends SVGAttributes<SVGElement> {
  animate?: boolean;
  animateBegin?: string;
  backgroundColor?: string;
  backgroundOpacity?: number;
  baseUrl?: string;
  beforeMask?: JSX.Element;
  foregroundColor?: string;
  foregroundOpacity?: number;
  gradientDirection?: 'left-right' | 'top-bottom';
  gradientRatio?: number;
  interval?: number;
  rtl?: boolean;
  speed?: number;
  style?: CSSProperties;
  title?: string;
  uniqueKey?: string;
}
//   animate: boolean;
//   backgroundColor: string;
//   backgroundOpacity: number;
//   baseUrl: string;
//   beforeMask?: string;
//   foregroundColor: string;
//   foregroundOpacity: number;
//   gradientDirection: string;
//   gradientRatio: number;
//   id?: string;
//   uniqueKey?: string;
//   interval: number;
//   rtl: boolean;
//   speed: number;
//   style: CSSProperties;
//   title: string;
