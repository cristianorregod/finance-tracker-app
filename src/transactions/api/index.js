const { VITE_API_URL } = import.meta.env

const TransactionApi = {
  create: async (transaction) => {
    const response = await fetch(`${VITE_API_URL}/transactions/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(transaction),
    })
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    return await response.json()
  },
}

export default TransactionApi
