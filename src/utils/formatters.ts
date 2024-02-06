// TODO: use international currency transformer
export const formatCurrency = (value: number | string | null): string => {
  // Format the value as currency
  if (value === null) return '-'
  const numberValue = typeof value === 'string' ? parseFloat(value) : value;
  return `$${numberValue.toFixed(2)}`;
  ;
}



export const formatPercentage = (value: number | string | null): string => {
  if (value === null) return '-';
  return `${(Number(value) / 100).toFixed(2)}%`;
  // Convert decimal to percentage and format
};