export const format = (number: string | number): string => {
  return "$ " + number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};
