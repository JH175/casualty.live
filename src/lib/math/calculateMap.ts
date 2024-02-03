export const calculateMap = (sbp: number, dbp: number) => {
  if (!sbp || !dbp) {
    return;
  }
  let total = Math.round(0.3333 * sbp + 0.6666 * dbp);
  return total;
};
