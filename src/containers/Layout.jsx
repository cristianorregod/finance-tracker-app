import { Outlet } from 'react-router'
import { Sidebar } from './Sidebar'

export const Layout = () => {
  return (
    <div className="h-screen flex gap-x-4">
      <Sidebar />
      <Outlet />
    </div>
  )
}
