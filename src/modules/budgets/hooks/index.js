import { setError, setLoading } from '@/modules/dashboard/slice'
import { useDispatch } from 'react-redux'
import { toast } from 'sonner'
import BudgetApi from '../api'
import { addBudget } from '../slice'

const useBudget = () => {
  const dispatch = useDispatch()

  const createBudget = async (budget) => {
    dispatch(setLoading(true))
    try {
      const budgetCreated = await BudgetApi.create(budget)
      dispatch(addBudget(budgetCreated.budget))
      toast.error(budgetCreated.message)

      dispatch(setLoading(false))
    } catch (error) {
      console.log('error', error)
      toast.error('Failed to create budget')
      dispatch(setError(error.message))
      dispatch(setLoading(false))
    }
  }
  return { createBudget }
}

export default useBudget
