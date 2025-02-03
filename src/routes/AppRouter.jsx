import { BrowserRouter, Routes, Route } from 'react-router'
import { HomeView } from '@dashboard'
import { AccountsView } from '@accounts/ui'
import { Layout } from '@/shared/containers/Layout'
import { BudgetView } from '@budgets/ui'
import { TransactionsView } from '@/transactions/ui'

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeView />} />
          <Route path="accounts" element={<AccountsView />} />
          <Route path="budgets" element={<BudgetView />} />
          <Route path="transactions" element={<TransactionsView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
