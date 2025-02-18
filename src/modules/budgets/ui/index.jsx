import { BudgetList } from './List'
import { useSelector } from 'react-redux'
import { BUDGETS_VIEWS } from '@helpers/constants'
import { setViewState } from '../slice'
import { CreateBudget } from './Create'
import { ViewHeader } from '@/shared/components/ViewHeader'

export const BudgetView = () => {
  const { viewState } = useSelector((state) => state.budgets)

  const views = {
    'budget-list': <BudgetList />,
    'new-budget': <CreateBudget />,
  }
  return (
    <section>
      <ViewHeader
        title={'Budget'}
        showButton={viewState === BUDGETS_VIEWS.BUDGET_LIST}
        onChangeView={setViewState(BUDGETS_VIEWS.NEW_BUDGET)}
      />
      {views[viewState]}
    </section>
  )
}
