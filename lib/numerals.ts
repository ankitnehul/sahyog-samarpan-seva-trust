const devanagariDigits = "०१२३४५६७८९";

/** Renders a year with Devanagari digits, e.g. 2016 → २०१६. */
export function toDevanagariDigits(value: number | string): string {
  return String(value).replace(/\d/g, (digit) => devanagariDigits[Number(digit)]);
}
