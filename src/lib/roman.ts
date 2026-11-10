const numerals: [number, string][] = [
  [10, "X"],
  [9, "IX"],
  [5, "V"],
  [4, "IV"],
  [1, "I"],
];
export function toRoman(n: number) {
  let out = "";
  for (const [v, r] of numerals) {
    while (n >= v) {
      out += r;
      n -= v;
    }
  }
  return out;
}
