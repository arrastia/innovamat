import type { CSSProperties, MouseEvent, ReactElement } from 'react';

export type ButtonType = 'delete' | 'primary' | 'secondary' | 'transparent' | 'selected' | 'unselected';

export type ButtonSize = 'large' | 'medium';

export interface IButton {
  className?: string;
  icon?: ReactElement;
  iconSize?: number;
  isDisabled?: boolean;
  isLoading?: boolean;
  label?: string;
  onClick?: () => void;
  onMouseDown?: (event: MouseEvent<HTMLButtonElement>) => void;
  size?: ButtonSize;
  style?: CSSProperties;
  type?: ButtonType;
}
