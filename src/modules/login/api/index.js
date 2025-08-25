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

    const loginData = await response.json()
    if (!response.ok) {
      throw new Error(loginData.details || 'Network response was not ok')
    }
    return loginData
  },
}

export default AuthApi
