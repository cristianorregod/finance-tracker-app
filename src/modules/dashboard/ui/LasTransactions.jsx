import { RenderIcon } from '@/shared/components/RenderIcon'
import { ROUTES } from '@/shared/helpers/constants'
import { formatCurrencyCOP } from '@/shared/helpers/currencyTools'
import { formatDateText } from '@/shared/helpers/dateTools'
import { ArrowLeftIcon, CakeIcon } from '@heroicons/react/24/solid'
import { Card, CardBody, ListItem } from '@material-tailwind/react'
import { Chip } from '@material-tailwind/react'
import { Button } from '@material-tailwind/react'
import { List } from '@material-tailwind/react'
import { Typography } from '@material-tailwind/react'
import { useState } from 'react'
import { Link } from 'react-router'

export const LasTransactions = ({ transactions }) => {
  const [transaction, setTransaction] = useState(null)
  const handleTransactionView = (transaction) => {
    setTransaction(transaction)
  }
  return (
    <Card className="w-full py-4 lg:px-4 lg:py-6  lg:w-96  bg-blue-gray-50/15">
      <Typography variant="h5" color="blue-gray" className="ml-4 flex justify-between lg:ml-0">
        {transaction ? 'Transaction details' : 'Last transactions'}
        {transaction && (
          <Button
            className="rounded-full w-fit p-1"
            variant="outlined"
            onClick={() => {
              setTransaction(null)
            }}
          >
            <ArrowLeftIcon className="size-6" />
          </Button>
        )}
      </Typography>
      {!transaction && (
        <List className="py-8">
          {transactions?.slice(0, 5)?.map((transaction) => (
            <ListItem
              key={transaction.id}
              onClick={() => handleTransactionView(transaction)}
              className="flex px-4 py-1"
            >
              <div className="flex items-center gap-x-2">
                <RenderIcon iconName={transaction?.icon} />
                <Typography variant="h6" color="blue-gray" className="text-sm">
                  {transaction.title}
                  <small className="block font-normal">{transaction?.category?.name}</small>
                </Typography>
              </div>
              <div className="ml-auto">
                <Typography variant="h6" className={transaction.type === 'INCOME' ? ' text-lemon-600' : 'text-red-600'}>
                  {formatCurrencyCOP(transaction.amount)}
                </Typography>
              </div>
            </ListItem>
          ))}
        </List>
      )}
      {!transaction && (
        <Link to={ROUTES.TRANSACTIONS} className="mx-auto">
          <Button variant="outlined" className="rounded-full w-60">
            All transactions
          </Button>
        </Link>
      )}

      {transaction && (
        <CardBody className="h-[325px]">
          <Typography variant="h6" color="blue-gray" className="flex justify-between mb-8">
            {transaction?.title}{' '}
            <Chip
              value={transaction?.type}
              className={transaction?.type === 'INCOME' ? ' bg-lemon-600' : 'bg-red-600'}
            />
          </Typography>

          <div className="flex justify-between mb-2">
            <Typography variant="paragraph" color="blue-gray" className="font-bold">
              Category:
            </Typography>
            <Typography variant="paragraph" className="font-normal">
              {transaction?.category?.name}
            </Typography>
          </div>
          <div className="flex justify-between mb-2">
            <Typography variant="paragraph" color="blue-gray" className="font-bold">
              Amount:
            </Typography>
            <Typography
              variant="paragraph"
              className={`font-normal ${transaction?.type === 'INCOME' ? ' text-lemon-600' : 'text-red-600'}`}
            >
              {formatCurrencyCOP(transaction?.amount)}
            </Typography>
          </div>
          <div className="flex justify-between mb-2">
            <Typography variant="paragraph" color="blue-gray" className="font-bold">
              Date:
            </Typography>
            <Typography variant="paragraph" className="font-normal">
              {formatDateText(transaction?.transaction_date)}
            </Typography>
          </div>
          {transaction?.from_account && (
            <div className="flex justify-between mb-2">
              <Typography variant="paragraph" color="blue-gray" className="font-bold">
                From account:
              </Typography>
              <Typography variant="paragraph" className="font-normal">
                {transaction?.from_account?.name}
              </Typography>
            </div>
          )}

          {transaction?.to_account && (
            <div className="flex justify-between mb-2">
              <Typography variant="paragraph" color="blue-gray" className="font-bold">
                To account:
              </Typography>
              <Typography variant="paragraph" className="font-normal">
                {transaction?.to_account?.name}
              </Typography>
            </div>
          )}
          {transaction?.budget && (
            <div className="flex justify-between mb-2">
              <Typography variant="paragraph" color="blue-gray" className="font-bold">
                Budget:
              </Typography>
              <Typography variant="paragraph " className="font-normal">
                {transaction?.budget?.name}
              </Typography>
            </div>
          )}
        </CardBody>
      )}
    </Card>
  )
}
