import { logout, setError, setLoading } from '@/modules/dashboard/slice'
import { useDispatch } from 'react-redux'
import { toast } from 'sonner'
import { addAccount, setAccounts } from '../slice'
import AccountApi from '../api'

const useAccount = () => {
  const dispatch = useDispatch()

  const getAccounts = async () => {
    dispatch(setLoading(true))
    try {
      const accounts = await AccountApi.get()
      dispatch(setAccounts(accounts))
      dispatch(setLoading(false))
    } catch (error) {
      console.log('error', error)
      if (error.status === 403) {
        toast.error(error?.data?.detail)
        dispatch(setError(error?.data?.detai))
        dispatch(setLoading(false))
        dispatch(logout())
      }
      toast.error('Failed to get accounts')
      dispatch(setError(error.message))
      dispatch(setLoading(false))
    }
  }

  const createAccount = async (account) => {
    dispatch(setLoading(true))
    try {
      const accountCreated = await AccountApi.create(account)
      dispatch(addAccount(accountCreated.account))
      toast.error(accountCreated.message)

      dispatch(setLoading(false))
    } catch (error) {
      console.log('error', error)
      toast.error('Failed to create account')
      dispatch(setError(error.message))
      dispatch(setLoading(false))
    }
  }
  return { getAccounts, createAccount }
}

export default useAccount
