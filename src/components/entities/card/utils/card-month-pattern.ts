export const cardMonthPattern = (month: string): string =>
  +month > 12 ? '12' : ('00' + month).slice(-2);
