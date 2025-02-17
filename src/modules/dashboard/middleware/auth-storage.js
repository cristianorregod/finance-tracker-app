const localStorageMiddleware = (storeAPI) => (next) => (action) => {
  const result = next(action)
  const state = storeAPI.getState().dashboard.auth
  localStorage.setItem('isAuthenticated', JSON.stringify(state.isAuthenticated))
  localStorage.setItem('token', state.token)
  localStorage.setItem('user_email', state.user)
  return result
}

export default localStorageMiddleware
