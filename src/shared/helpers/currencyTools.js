export function formatCurrencyCOP(value) {
  const formatter = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0, // Puedes ajustar a 2 para incluir centavos si es necesario
  })
  return formatter.format(value)
}

export const reverseFormat = (currency) => {
  const firstStep = currency.split('').slice(2, currency.split('').length)
  const deletePoint = firstStep.filter((number) => number !== '.')
  const finalResult = deletePoint.join('')
  return finalResult
}
