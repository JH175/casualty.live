export const calculateGcs = (e: number, v: number, m: number) => {
  if (!e || !v || !m) {
    return;
  }
  let total = e + v + m;
  return total;
};
