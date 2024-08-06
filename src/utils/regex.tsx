export function formatCEP(cep: string): string {
  // Remove qualquer caractere não numérico
  const cleaned = cep.replace(/\D/g, '');

  // Verifica se o CEP tem 8 dígitos
  if (cleaned.length !== 8) {
    throw new Error('CEP inválido. Deve ter exatamente 8 dígitos.');
  }

  // Adiciona a máscara no formato "XXXXX-XXX"
  const match = cleaned.match(/^(\d{5})(\d{3})$/);
  if (match) {
    return `${match[1]}-${match[2]}`;
  }

  console.log('CEP inválido. Deve ter exatamente 8 dígitos.');
  return '';
}
