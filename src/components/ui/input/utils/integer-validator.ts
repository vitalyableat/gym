import { KeyboardEventHandler } from 'react';

const ALLOWED_KEYS = ['Backspace', 'Delete', 'ArrowRight', 'ArrowLeft'];

export const integerValidator: KeyboardEventHandler<HTMLInputElement> = (event) =>
  !/\d/.test(event.key) && !ALLOWED_KEYS.includes(event.key) && event.preventDefault();
