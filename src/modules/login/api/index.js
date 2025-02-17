const { VITE_API_URL } = import.meta.env

const AuthApi = {
  login: async (user) => {
    const response = await fetch(`${VITE_API_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    return await response.json()
  },
}

export default AuthApi
