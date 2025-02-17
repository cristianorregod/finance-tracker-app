import { setLoading, setError } from '@/modules/dashboard/slice'
import { useDispatch } from 'react-redux'
import TransactionApi from '../api'
import { addTransaction, setTransactionView } from '../slice'
import { toast } from 'sonner'
import { TRANSACTIONS_VIEWS } from '@/shared/helpers/constants'

const useTransaction = () => {
  const dispatch = useDispatch()
  const createTransaction = async (transaction) => {
    dispatch(setLoading(true))
    try {
      const transactionCreated = await TransactionApi.create(transaction)
      dispatch(addTransaction(transactionCreated.transaction))
      toast.error(transactionCreated.message)
      dispatch(setLoading(false))
      dispatch(setTransactionView(TRANSACTIONS_VIEWS.TRANSACTION_LIST))
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
