import { Outlet } from 'react-router'
import { Sidebar } from './Sidebar'
import { Toaster } from 'sonner'
import { Loader } from '@/shared/components/Loader'
import { useSelector } from 'react-redux'
import { MobileMenu } from './MobileMenu'

export const Layout = () => {
  const { isLoading } = useSelector((state) => state.dashboard)
  return (
    <div className="min-h-screen flex gap-x-4 ">
      <Sidebar />
      <main className="container mx-auto py-10 px-8">
        <Outlet />
        <Toaster />
        {isLoading && <Loader />}
        <MobileMenu />
      </main>
    </div>
  )
}
