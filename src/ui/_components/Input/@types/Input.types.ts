import type { ChangeEvent, KeyboardEvent } from 'react';

export interface InputProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (event: KeyboardEvent<HTMLInputElement>) => void;
  placeholder?: string;
  value: string;
}
