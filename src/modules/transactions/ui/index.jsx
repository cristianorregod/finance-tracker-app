import { ViewHeader } from '@/shared/components/ViewHeader'
import { setTransactionView } from '../slice'
import { TRANSACTIONS_VIEWS } from '@/shared/helpers/constants'
import { TransactionList } from './List'
import { useSelector } from 'react-redux'
import { CreateTransaction } from './Create'

export const TransactionsView = () => {
  const { viewState } = useSelector((state) => state.transactions)
  const views = {
    'transaction-list': <TransactionList />,
    'new-transaction': <CreateTransaction />,
  }
  return (
    <section>
      <ViewHeader
        title={'Transaction'}
        showButton={viewState === TRANSACTIONS_VIEWS.TRANSACTION_LIST}
        onChangeView={setTransactionView(TRANSACTIONS_VIEWS.NEW_TRANSACTION)}
      />
      {views[viewState]}
    </section>
  )
}
