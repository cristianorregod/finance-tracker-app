import { createSlice } from '@reduxjs/toolkit'

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState: {
    transactions: [],
    viewState: 'transaction-list', // account-list, account-selected, new-account
  },
  reducers: {
    setTransactions: (state, action) => {
      state.transactions = action.payload
    },
    setTransactionView: (state, action) => {
      state.viewState = action.payload
    },
    addTransaction: (state, action) => {
      state.transactions.unshift(action.payload)
    },
  },
})

export const { setTransactions, setTransactionView, addTransaction } = transactionsSlice.actions
export default transactionsSlice.reducer
