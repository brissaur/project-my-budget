export function formatCurrency(value: number): string | null {
  if (!value) {
    return null;
  }

  const sign = value < 0 ? "-" : "+";

  return `${sign}${value}€`;
}
