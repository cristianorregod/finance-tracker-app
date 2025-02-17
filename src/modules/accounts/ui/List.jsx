import { AccountCard } from '@/shared/components/AccountCard'

import { useSelector } from 'react-redux'
import { selectAccount } from '../slice'
import { useDispatch } from 'react-redux'

export const AccountsList = () => {
  const dispatch = useDispatch()
  const { accounts } = useSelector((state) => state.accounts)

  return (
    <section className=" grid pb-20 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 items-center md:gap-2.5 gap-4">
      {accounts.map((props, key) => (
        <AccountCard
          key={key}
          account={props}
          onClick={() => dispatch(selectAccount({ account: props, view: 'account-selected' }))}
        />
      ))}
    </section>
  )
}
