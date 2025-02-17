import { createSlice } from '@reduxjs/toolkit'

const budgetsSlice = createSlice({
  name: 'budgets',
  initialState: {
    budgets: [],
    budgetSelected: null,
    viewState: 'budget-list', // budget-list, budget-selected, new-budget
    newAccount: null,
  },
  reducers: {
    setBudgets: (state, action) => {
      state.budgets = action.payload
    },
    selectBudget: (state, action) => {
      state.budgetSelected = action.payload
    },
    setViewState: (state, action) => {
      state.viewState = action.payload
    },
    addBudget: (state, action) => {
      state.budgets.push(action.payload)
    },
  },
})

export const { setBudgets, selectBudget, setViewState, addBudget } = budgetsSlice.actions
export default budgetsSlice.reducer
