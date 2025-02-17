import { Navigate, Outlet } from 'react-router'
export const ProtectedRoute = ({ isAllowed }) => {
  if (!isAllowed) {
    return <Navigate to="/login" replace />
  }

  return <Outlet />
}
