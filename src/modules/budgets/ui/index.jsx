import { Button } from '@material-tailwind/react'
import { Typography } from '@material-tailwind/react'
import { BudgetList } from './List'
import { useSelector } from 'react-redux'
import { BUDGETS_VIEWS } from '@helpers/constants'
import { useDispatch } from 'react-redux'
import { setViewState } from '../slice'
import { CreateBudget } from './Create'

export const BudgetView = () => {
  const dispatch = useDispatch()
  const { viewState } = useSelector((state) => state.budgets)

  const views = {
    'budget-list': <BudgetList />,
    'new-budget': <CreateBudget />,
  }
  return (
    <section>
      <header className="flex justify-between items-center mb-8">
        <Typography variant="h1" color="blue-gray" className="!text-3xl">
          Budgets
        </Typography>

        <Button
          variant="gradient"
          className="rounded-full"
          onClick={() => dispatch(setViewState(BUDGETS_VIEWS.NEW_BUDGET))}
        >
          New budget
        </Button>
      </header>
      {views[viewState]}
    </section>
  )
}
