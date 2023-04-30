export const addMonths = (date: string, months: number) =>
  new Date(new Date(date).setMonth(new Date(date).getMonth() + months)).toISOString().split('T')[0];
