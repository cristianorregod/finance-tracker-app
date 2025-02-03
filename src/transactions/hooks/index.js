import { setLoading, setError } from '@/dashboard/slice'
import { useDispatch } from 'react-redux'
import TransactionApi from '../api'
import { addTransaction } from '../slice'
import { toast } from 'sonner'

const useTransaction = () => {
  const dispatch = useDispatch()
  const createTransaction = async (transaction) => {
    dispatch(setLoading(true))
    try {
      const transactionCreated = await TransactionApi.create(transaction)
      dispatch(addTransaction(transactionCreated.transaction))
      toast.error(transactionCreated.message)
      dispatch(setLoading(false))
    } catch (error) {
      console.log('error', error)
      toast.error('Failed to create transaction')
      dispatch(setError(error.message))
      dispatch(setLoading(false))
    }
  }
  return { createTransaction }
}

export default useTransaction
