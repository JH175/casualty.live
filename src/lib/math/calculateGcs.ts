export const calculateGcs = (e: number, v: number, m: number) => {
  if (!e || !v || !m) {
    return;
  }
  return e + v + m;
};
