import { BrowserRouter, Routes, Route } from 'react-router'
import { HomeView } from '@modules/dashboard'
import { AccountsView } from '@/modules/accounts/ui'
import { Layout } from '@/shared/containers/Layout'
import { BudgetView } from '@/modules/budgets/ui'
import { TransactionsView } from '@/modules/transactions/ui'
import { Login } from '@/modules/login/ui'
import { useSelector } from 'react-redux'
import { ProtectedRoute } from '@/shared/containers/ProtectedRoutes'

export const AppRouter = () => {
  const { isAuthenticated } = useSelector((state) => state.dashboard.auth)
  console.log('router', isAuthenticated)
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/" element={<ProtectedRoute isAllowed={isAuthenticated} />}>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomeView />} />
            <Route path="accounts" element={<AccountsView />} />
            <Route path="budgets" element={<BudgetView />} />
            <Route path="transactions" element={<TransactionsView />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
