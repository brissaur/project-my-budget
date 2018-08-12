export const formatDecimalNumber = (value: string) => {
  const b = value.replace(/(\.|,)/, "");
  const c = "00".concat(b);
  const d = c.slice(0, c.length - 2) + "." + c.slice(-2);
  const e = +d.toString();

  return e;
};

export const formatDecimalNumberFromEvent = (
  event: React.ChangeEvent<HTMLInputElement>
) => {
  const value = event.target.value as string;
  return formatDecimalNumber(value);
};
