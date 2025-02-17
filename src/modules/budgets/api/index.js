const { VITE_API_URL } = import.meta.env

const BudgetApi = {
  create: async (budget) => {
    const response = await fetch(`${VITE_API_URL}/budgets/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(budget),
    })
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    return await response.json()
  },
}

export default BudgetApi
