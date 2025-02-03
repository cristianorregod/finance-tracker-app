import { Typography, Card, CardBody, CardFooter } from '@material-tailwind/react'

import { ClockIcon } from '@heroicons/react/24/solid'
import { formatCurrencyCOP } from '../helpers/currencyTools'
import { formatDateText } from '@helpers/dateTools'

export const AccountCard = ({ account, onClick = null }) => {
  const { name, current_balance, icon, last_transaction_date } = account
  return (
    <Card onClick={onClick} className="cursor-pointer">
      <CardBody className="p-4">
        <div className="flex justify-between items-center">
          <Typography className="!font-medium !text-xs text-gray-600">{name}</Typography>
          {/* <div className="flex items-center gap-1">
            {icon}
            <Typography color={color} className="font-medium !text-xs">
              {percentage}
            </Typography>
          </div> */}
        </div>
        <Typography color="blue-gray" className="mt-1 font-bold text-2xl">
          {formatCurrencyCOP(current_balance)}
        </Typography>

        <hr className="my-4 border-blue-gray-50" />
        <CardFooter className="p-0 mt-4 flex items-center gap-x-1">
          <ClockIcon className="size-4 text-gray-600" />
          <Typography className="!text-xs text-gray-600 font-medium">
            Last transaction:{' '}
            <span className="text-black font-bold">{formatDateText(last_transaction_date) || 'No transactions'}</span>
          </Typography>
        </CardFooter>
      </CardBody>
    </Card>
  )
}
