import { useState } from 'react'
import { PencilIcon } from '@heroicons/react/24/solid'
import { ArrowDownTrayIcon, MagnifyingGlassIcon, ArrowsRightLeftIcon } from '@heroicons/react/24/outline'
import {
  Card,
  CardHeader,
  Typography,
  Button,
  CardBody,
  CardFooter,
  IconButton,
  Tooltip,
  Input,
} from '@material-tailwind/react'
import { setDefaultDialogOpen } from '@/modules/dashboard/slice'
import { DefaultDialog } from '@/shared/components/Dialog'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { formatDateText } from '@/shared/helpers/dateTools'
import { formatCurrencyCOP } from '@/shared/helpers/currencyTools'
import { Chip } from '@material-tailwind/react'

const TABLE_HEAD = [
  { label: 'Description', width: 'max-w-64' },
  { label: 'Date', width: 'max-w-48' },
  { label: 'Amount', width: 'max-w-48' },
  { label: 'Account', width: 'max-w-64' },
  { label: 'Type', width: 'max-w-32' },
  { label: 'Actions', width: 'max-w-32' },
]

export const TransactionList = () => {
  const dispatch = useDispatch()
  const { defaultDialogOpen } = useSelector((state) => state.dashboard)
  const { transactions } = useSelector((state) => state.transactions)
  // Estados para paginación
  const [currentPage, setCurrentPage] = useState(1) // Página actual
  const rowsPerPage = 5 // Filas por página

  // Calcular el índice de inicio y final
  const startIndex = (currentPage - 1) * rowsPerPage
  const endIndex = startIndex + rowsPerPage

  // Filas actuales para la página
  const currentRows = transactions.slice(startIndex, endIndex)

  // Número total de páginas
  const totalPages = Math.ceil(transactions.length / rowsPerPage)

  // Funciones para cambiar de página
  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1)
  }

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1)
  }

  return (
    <Card className="h-full w-full">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <Typography variant="h5" color="blue-gray">
              Recent Transactions
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              These are details about the last transactions
            </Typography>
          </div>
          <div className="hidden lg:flex w-full shrink-0 gap-2 md:w-max">
            <div className="w-full md:w-72">
              <Input label="Search" icon={<MagnifyingGlassIcon className="h-5 w-5" />} />
            </div>
            <Button className="flex items-center gap-3" size="sm" onClick={() => dispatch(setDefaultDialogOpen(true))}>
              <ArrowDownTrayIcon strokeWidth={2} className="h-4 w-4" /> Download
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardBody className="px-0 overflow-y-auto">
        <table className="w-full min-w-max table-auto text-left border-collapse">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th key={head.label} className={`border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 ${head.width}`}>
                  <Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70">
                    {head.label}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentRows.map(({ title, amount, transaction_date, to_account, from_account, type }, index) => {
              const isLast = index === currentRows.length - 1
              const classes = isLast ? 'px-4 py-2' : 'py-2 px-4 border-b border-blue-gray-50'

              return (
                <tr key={title}>
                  <td className={classes}>
                    <div className="">
                      <Typography variant="small" color="blue-gray" className="font-bold">
                        {title}
                      </Typography>
                    </div>
                  </td>
                  <td className={classes}>
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {formatDateText(transaction_date)}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {formatCurrencyCOP(amount)}
                    </Typography>
                  </td>
                  <td className={'w-fit'}>
                    <Typography variant="small" color="blue-gray" className="font-normal capitalize flex gap-x-1 ">
                      {from_account && to_account && (
                        <>
                          {to_account?.name} <ArrowsRightLeftIcon className="h-5 w-5" /> {from_account?.name}
                        </>
                      )}
                      {!from_account && to_account && to_account?.name}
                      {!to_account && from_account && from_account?.name}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <div className="flex items-center gap-3">
                      <div className="flex flex-col">
                        <Typography variant="small" color="blue-gray" className="font-normal capitalize">
                          <Chip value={type} size="sm" className={type === 'INCOME' ? ' bg-lemon-600' : 'bg-red-600'} />
                        </Typography>
                      </div>
                    </div>
                  </td>

                  <td className={classes}>
                    <Tooltip content="Edit User">
                      <IconButton variant="text">
                        <PencilIcon className="h-4 w-4" />
                      </IconButton>
                    </Tooltip>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </CardBody>
      <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        <Button variant="outlined" size="sm" onClick={handlePreviousPage} disabled={currentPage === 1}>
          Previous
        </Button>
        <Typography>{`Page ${currentPage} of ${totalPages}`}</Typography>
        <Button variant="outlined" size="sm" onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </Button>
      </CardFooter>
      <DefaultDialog open={defaultDialogOpen} />
    </Card>
  )
}
