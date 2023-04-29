import { ClipboardEventHandler } from 'react';

export const pasteValidator: ClipboardEventHandler<HTMLInputElement> = (event) =>
  event.preventDefault();
