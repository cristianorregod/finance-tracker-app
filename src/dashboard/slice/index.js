import { createSlice } from '@reduxjs/toolkit'
const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState: {
    isLoading: false,
    error: '',
    defaultDialogOpen: false,
    categories: [],
  },
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload
    },
    setError: (state, action) => {
      state.error = action.payload
    },
    setDefaultDialogOpen: (state, action) => {
      state.defaultDialogOpen = action.payload
    },
    setCategories: (state, action) => {
      state.categories = action.payload
    },
  },
})
export const { setLoading, setError, setDefaultDialogOpen, setCategories } = dashboardSlice.actions
export default dashboardSlice.reducer
