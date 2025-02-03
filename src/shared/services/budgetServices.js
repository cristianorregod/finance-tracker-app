const { VITE_API_URL } = import.meta.env
export const fetchBudgets = async () => {
  try {
    const response = await fetch(`${VITE_API_URL}/budgets`)
    if (!response.ok) {
      throw new Error('Failed to fetch budgets')
    }
    return await response.json()
  } catch (error) {
    console.error('Error fetching transactions:', error)
    throw error
  }
}
