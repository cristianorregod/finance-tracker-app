import { useDispatch } from 'react-redux'
import { Link } from 'react-router'
import {
  PresentationChartBarIcon,
  PowerIcon,
  BanknotesIcon,
  ShoppingCartIcon,
  ArchiveBoxArrowDownIcon,
} from '@heroicons/react/24/solid'
import { logout } from '@/modules/dashboard/slice'

const menuItems = [
  { name: 'Dashboard', icon: PresentationChartBarIcon, href: '/' },
  { name: 'Accounts', icon: BanknotesIcon, href: '/accounts' },
  { name: 'Transactions', icon: ShoppingCartIcon, href: '/transactions' },
  { name: 'Budgets', icon: ArchiveBoxArrowDownIcon, href: '/budgets' },
]

export function MobileMenu() {
  const dispatch = useDispatch()
  const handleLogout = () => {
    console.log('logout')
    dispatch(logout())
  }
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-[9999] md:hidden">
      <ul className="flex justify-around items-center h-16">
        {menuItems.map((item) => (
          <li key={item.name} className=" rounded-lg hover:bg-gray-100">
            <Link to={item.href} className="flex flex-col items-center p-2">
              <item.icon className="h-6 w-6 text-blue-gray-800" />
              <span className="text-xs text-blue-gray-800 mt-1">{item.name}</span>
            </Link>
          </li>
        ))}
        <li onClick={handleLogout} className=" rounded-lg hover:bg-gray-100 flex flex-col items-center p-2">
          <PowerIcon className="h-6 w-6 text-blue-gray-800" />
          <span className="text-xs text-blue-gray-800 mt-1">Logout</span>
        </li>
      </ul>
    </nav>
  )
}
