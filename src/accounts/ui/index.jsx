import { Typography } from '@material-tailwind/react'
import { Button } from '@material-tailwind/react'
import { ACCOUNTS_VIEWS } from '@/shared/helpers/constants'
import { AccountsList } from './List'
import { AccountDetails } from './Details'
import { CreateAccount } from './Create'
import { useSelector } from 'react-redux'
import { setViewState } from '../slice'
import { useDispatch } from 'react-redux'

export const AccountsView = () => {
  const dispatch = useDispatch()
  const { viewState } = useSelector((state) => state.accounts)

  const views = {
    'account-list': <AccountsList />,
    'account-selected': <AccountDetails />,
    'new-account': <CreateAccount />,
  }

  return (
    <section>
      <header className="flex justify-between items-center mb-8">
        <Typography variant="h1" color="blue-gray" className="!text-3xl">
          Accounts
        </Typography>
        {viewState === ACCOUNTS_VIEWS.ACCOUNT_LIST && (
          <Button variant="gradient" className="rounded-full" onClick={() => dispatch(setViewState('new-account'))}>
            New account
          </Button>
        )}
      </header>
      {views[viewState]}
    </section>
  )
}
