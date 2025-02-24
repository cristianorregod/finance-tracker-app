import { Typography, List, ListItem, ListItemPrefix } from '@material-tailwind/react'
import {
  PresentationChartBarIcon,
  WalletIcon,
  Cog6ToothIcon,
  PowerIcon,
  BanknotesIcon,
  ShoppingCartIcon,
  ArchiveBoxArrowDownIcon,
} from '@heroicons/react/24/solid'
import { Link } from 'react-router'
import { useDispatch } from 'react-redux'
import { logout } from '@/modules/dashboard/slice'

export const Sidebar = () => {
  const dispatch = useDispatch()
  const handleLogout = () => {
    console.log('logout')
    dispatch(logout())
  }
  return (
    <aside className="hidden lg:block min-h-[100%] max-w-[18rem] p-4 shadow-xl shadow-blue-gray-900/8 ">
      <div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray">
          SpendTrail
        </Typography>
      </div>
      <List>
        <Link to="/" className="flex">
          <ListItem>
            <ListItemPrefix>
              <PresentationChartBarIcon className="h-5 w-5" />
            </ListItemPrefix>
            Dashboard
          </ListItem>
        </Link>
        <Link to="/accounts" className="flex">
          <ListItem>
            <ListItemPrefix>
              <BanknotesIcon className="h-5 w-5" />
            </ListItemPrefix>
            Accounts
          </ListItem>
        </Link>
        <Link to="/transactions" className="flex">
          <ListItem>
            <ListItemPrefix>
              <ShoppingCartIcon className="h-5 w-5" />
            </ListItemPrefix>
            Transactions
          </ListItem>
        </Link>
        <Link to="/budgets" className="flex">
          <ListItem>
            <ListItemPrefix>
              <ArchiveBoxArrowDownIcon className="h-5 w-5" />
            </ListItemPrefix>
            Budgets
          </ListItem>
        </Link>
        <ListItem>
          <ListItemPrefix>
            <Cog6ToothIcon className="h-5 w-5" />
          </ListItemPrefix>
          Settings
        </ListItem>
        <ListItem onClick={handleLogout}>
          <ListItemPrefix>
            <PowerIcon className="h-5 w-5" />
          </ListItemPrefix>
          Log Out
        </ListItem>
      </List>
    </aside>
  )
}
