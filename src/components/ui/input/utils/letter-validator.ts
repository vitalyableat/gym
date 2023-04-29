import { KeyboardEventHandler } from 'react';

const ALLOWED_KEYS = ['Backspace', 'Delete', 'ArrowRight', 'ArrowLeft'];

export const letterValidator: KeyboardEventHandler<HTMLInputElement> = (event) =>
  !/[А-яA-zЁё\s]/.test(event.key) && !ALLOWED_KEYS.includes(event.key) && event.preventDefault();
