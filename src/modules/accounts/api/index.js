import { apiFetch } from '@/shared/api/apiFetch'

//Create account method
const AccountApi = {
  get: async () => {
    const response = await apiFetch('/accounts/')
    return response
  },
  create: async (account) => {
    const response = await apiFetch(`/accounts/`, {
      method: 'POST',
      body: JSON.stringify(account),
    })
    console.log(response)

    return response
  },
}

export default AccountApi
