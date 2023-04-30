export const cardNumberPattern = (number: string): string =>
  (number.padEnd(16, 'Х').match(/.{4}/g) as string[]).join(' ');
