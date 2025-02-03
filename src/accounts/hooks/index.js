import { setError, setLoading } from '@/dashboard/slice'
import { useDispatch } from 'react-redux'
import { toast } from 'sonner'
import { addAccount } from '../slice'
import AccountApi from '../api'

const useAccount = () => {
  const dispatch = useDispatch()

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
  return { createAccount }
}

export default useAccount
