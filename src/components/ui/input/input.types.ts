import { InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  Icon?: JSX.Element;
  validator?: 'price' | 'integer' | 'text' | 'english';
}
