import { createSlice } from '@reduxjs/toolkit'

const accountsSlice = createSlice({
  name: 'accounts',
  initialState: {
    accounts: [],
    accountSelected: null,
    viewState: 'account-list', // account-list, account-selected, new-account
    newAccount: null,
  },
  reducers: {
    setAccounts: (state, action) => {
      state.accounts = action.payload
    },
    selectAccount: (state, action) => {
      state.accountSelected = action.payload.account
      state.viewState = action.payload.view
    },
    setViewState: (state, action) => {
      state.viewState = action.payload
    },
    addAccount: (state, action) => {
      state.accounts.push(action.payload)
    },
  },
})

export const { setAccounts, selectAccount, setViewState, addAccount } = accountsSlice.actions
export default accountsSlice.reducer
