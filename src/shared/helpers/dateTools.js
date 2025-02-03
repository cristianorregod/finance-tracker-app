export function formatDateText(date) {
  if (!date) return ''
  const options = { month: 'short', day: '2-digit', year: 'numeric' }
  return new Date(date).toLocaleDateString('en-US', options)
}
