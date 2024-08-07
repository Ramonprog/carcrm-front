export const formatCEP = (value: string): string => {
  const cleanedValue = value.replace(/\D/g, '');

  const limitedValue = cleanedValue.slice(0, 8);

  return limitedValue.replace(/^(\d{5})(\d{0,3})$/, '$1-$2');
};

export const removeSpecialCharacters = (value: string): string => {
  return value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
};