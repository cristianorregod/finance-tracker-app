// accountsService.js
const { VITE_API_URL } = import.meta.env
export const fetchAccounts = async () => {
  try {
    const response = await fetch(`${VITE_API_URL}/accounts`)
    if (!response.ok) {
      throw new Error('Failed to fetch transactions')
    }
    return await response.json()
  } catch (error) {
    console.error('Error fetching transactions:', error)
    throw error
  }
}
export const fetchTransactions = async (accountId) => {
  try {
    const response = await fetch(`${VITE_API_URL}/transactions`)
    if (!response.ok) {
      throw new Error('Failed to fetch transactions')
    }
    return await response.json()
  } catch (error) {
    console.error('Error fetching transactions:', error)
    throw error
  }
}

// method for create account
export const createAccount = async (data) => {
  try {
    const response = await fetch(`${VITE_API_URL}/accounts/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Allow-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(data),
    })
    console.log('response', response)
    return await response.json()
  } catch (error) {
    console.error('Error creating account:', error)
    throw error
  }
}
