export const calculateRts = (sbp: number, dbp: number) => {
  if (!sbp || !dbp) {
    return;
  }
  let total = sbp + dbp;
  return total;
};
