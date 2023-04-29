import { KeyboardEventHandler } from 'react';

const ALLOWED_KEYS = ['Backspace', 'Delete', 'ArrowRight', 'ArrowLeft'];
export const priceRegex = /^\d*(\.\d{0,2})?$/;

const insert = (str: string, index: number, value: string) =>
  str.substring(0, index) + value + str.substring(index);

export const priceValidator: KeyboardEventHandler<HTMLInputElement> = (event) => {
  const NOT_A_PRICE = !priceRegex.test(
    insert(event.currentTarget.value, event.currentTarget.selectionStart as number, event.key)
  );

  NOT_A_PRICE && !ALLOWED_KEYS.includes(event.key) && event.preventDefault();
};
