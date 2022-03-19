import type { CSSProperties, MouseEvent, ReactElement } from 'react';

export type ButtonType = 'delete' | 'primary' | 'secondary' | 'transparent';

export interface IButton {
  className?: string;
  icon?: ReactElement;
  iconSize?: number;
  isDisabled?: boolean;
  isLoading?: boolean;
  label?: string;
  onClick?: () => void;
  onMouseDown?: (event: MouseEvent<HTMLButtonElement>) => void;
  style?: CSSProperties;
  type?: ButtonType;
}
