import { configureStore } from '@reduxjs/toolkit'
import accountsReducer from '@/modules/accounts/slice'
import dashboardReducer from '@/modules/dashboard/slice'
import budgetsReducer from '@/modules/budgets/slice'
import transactionsReducer from '@/modules/transactions/slice'
import localStorageMiddleware from '@/modules/dashboard/middleware/auth-storage'
export const store = configureStore({
  reducer: {
    accounts: accountsReducer,
    dashboard: dashboardReducer,
    budgets: budgetsReducer,
    transactions: transactionsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageMiddleware),
})
