// @material-tailwind/react
import { Typography } from '@material-tailwind/react'
import { AccountCard } from '@/shared/components/AccountCard'
import { BudgetCard } from '@/shared/components/BudgetCard'
import { DefaultSkeleton } from '@/shared/components/DefaulSkeleton'

import { useSelector } from 'react-redux'
import { LasTransactions } from './ui/LasTransactions'
import { Card } from '@material-tailwind/react'
import { useEffect } from 'react'
import useDasboardProvider from './hooks'

export const HomeView = () => {
  const { accounts } = useSelector((state) => state.accounts)
  const { budgets } = useSelector((state) => state.budgets)
  const { isLoading } = useSelector((state) => state.dashboard)
  const { transactions } = useSelector((state) => state.transactions)
  const { fetchInitialData } = useDasboardProvider()

  useEffect(() => {
    fetchInitialData()
  }, [])
  return (
    <section className=" pb-20 lg:grid lg:grid-cols-[394px_auto] lg:auto-rows-auto lg:gap-4 w-full ">
      <LasTransactions transactions={transactions} />
      <Card className="px-4 py-6 col-span-1 row-span-1 bg-blue-gray-50/15">
        <Typography variant="h5" color="blue-gray" className="mb-4">
          Budgets
        </Typography>
        {isLoading && <DefaultSkeleton />}

        <div className=" grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 items-center md:gap-2.5 gap-4">
          {budgets.map((props, key) => (
            <BudgetCard key={key} budget={props} />
          ))}
        </div>
      </Card>
      <Card className="px-4 py-6 col-span-2 row-span-1 bg-blue-gray-50/15">
        <Typography variant="h5" color="blue-gray" className="mb-4">
          Accounts
        </Typography>
        {isLoading && <DefaultSkeleton />}
        <div className="grid md:grid-cols-4 grid-cols-1 items-center md:gap-2.5 gap-4">
          {accounts.map((props, key) => (
            <AccountCard key={key} account={props} />
          ))}
        </div>
      </Card>
    </section>
  )
}
