import { ACCOUNTS_VIEWS } from '@/shared/helpers/constants'
import { AccountsList } from './List'
import { AccountDetails } from './Details'
import { CreateAccount } from './Create'
import { useSelector } from 'react-redux'
import { setViewState } from '../slice'
import { useEffect } from 'react'
import useAccount from '../hooks'
import { ViewHeader } from '@/shared/components/ViewHeader'

export const AccountsView = () => {
  const { viewState } = useSelector((state) => state.accounts)
  const { getAccounts } = useAccount()

  const views = {
    'account-list': <AccountsList />,
    'account-selected': <AccountDetails />,
    'new-account': <CreateAccount />,
  }
  useEffect(() => {
    getAccounts()
  }, [])
  return (
    <section>
      <ViewHeader
        title={'Account'}
        showButton={viewState === ACCOUNTS_VIEWS.ACCOUNT_LIST}
        onChangeView={setViewState(ACCOUNTS_VIEWS.NEW_ACCOUNT)}
      />
      {views[viewState]}
    </section>
  )
}
