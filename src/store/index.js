import { configureStore } from '@reduxjs/toolkit'
import accountsReducer from '@/accounts/slice'
import dashboardReducer from '@/dashboard/slice'
import budgetsReducer from '@/budgets/slice'
import transactionsReducer from '@/transactions/slice'
export const store = configureStore({
  reducer: {
    accounts: accountsReducer,
    dashboard: dashboardReducer,
    budgets: budgetsReducer,
    transactions: transactionsReducer,
  },
})
