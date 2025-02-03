const { VITE_API_URL } = import.meta.env

//Create account method
const AccountApi = {
  create: async (account) => {
    const response = await fetch(`${VITE_API_URL}/accounts/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(account),
    })
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    return await response.json()
  },
}

export default AccountApi
