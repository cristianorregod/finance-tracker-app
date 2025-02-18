import { apiFetch } from '@/shared/api/apiFetch'

const TransactionApi = {
  get: async () => {
    const response = await apiFetch('/transactions/')
    return response
  },
  create: async (transaction) => {
    const response = await apiFetch(`/transactions/`, {
      method: 'POST',
      body: JSON.stringify(transaction),
    })

    return response
  },
}

export default TransactionApi
