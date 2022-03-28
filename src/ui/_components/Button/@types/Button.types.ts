import type { CSSProperties, ReactElement } from 'react';

export type ButtonType = 'delete' | 'primary' | 'secondary' | 'transparent' | 'selected' | 'unselected';

export type ButtonSize = 'large' | 'medium';

export interface ButtonProps {
  className?: string;
  icon?: ReactElement;
  isDisabled?: boolean;
  label?: string;
  onClick?: () => void;
  size?: ButtonSize;
  style?: CSSProperties;
  type?: ButtonType;
}
