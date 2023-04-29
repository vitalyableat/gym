import { KeyboardEventHandler } from 'react';

const ALLOWED_KEYS = ['Backspace', 'Delete', 'ArrowRight', 'ArrowLeft'];

export const englishLetterValidator: KeyboardEventHandler<HTMLInputElement> = (event) =>
  !/[A-z\s]/.test(event.key) && !ALLOWED_KEYS.includes(event.key) && event.preventDefault();
