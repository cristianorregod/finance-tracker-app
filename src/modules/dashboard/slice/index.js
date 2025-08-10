import { createSlice } from "@reduxjs/toolkit";
const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: {
    isLoading: false,
    error: "",
    defaultDialogOpen: false,
    categories: [],
    auth: {
      isAuthenticated: JSON.parse(
        localStorage.getItem("isAuthenticated") || "false"
      ),
      user: localStorage.getItem("user"),
      token: localStorage.getItem("token"),
    },
  },
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setDefaultDialogOpen: (state, action) => {
      state.defaultDialogOpen = action.payload;
    },
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    setLogin: (state, action) => {
      state.auth = action.payload;
    },
    logout: (state) => {
      state.auth = {
        isAuthenticated: false,
        user: null,
        token: null,
      };
      localStorage.removeItem("isAuthenticated");
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    },
  },
});
export const {
  setLoading,
  setError,
  setDefaultDialogOpen,
  setCategories,
  setLogin,
  logout,
} = dashboardSlice.actions;
export default dashboardSlice.reducer;
