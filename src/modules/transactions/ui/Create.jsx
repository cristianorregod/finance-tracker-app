import { Button } from '@material-tailwind/react'
import { useDispatch } from 'react-redux'
import { setTransactionView } from '../slice'
import { TRANSACTION_TYPES, TRANSACTION_TYPES_OPTIONS, TRANSACTIONS_VIEWS } from '@/shared/helpers/constants'
import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import { CurrencyField } from '@/shared/components/CurrencyField'
import { useForm } from 'react-hook-form'
import { Typography } from '@material-tailwind/react'
import { useSelector } from 'react-redux'
import { DefaultInput } from '@/shared/components/DefaultInput'
import { SelectField } from '@/shared/components/SelectField'
import { IconPicker } from '@/shared/components/IconPicker'
import useTransaction from '../hooks'
// {
//   "id": 0,
//   "from_account_id": 0,
//   "to_account_id": 0,
//   "budget_id": 0,
//   "category_id": 0,
//   "type": "string",
//   "description": "stringstri",
//   "amount": 0,
//   "icon": "string",
//   "transaction_date": "2025-01-14"
// }
export const CreateTransaction = () => {
  const dispatch = useDispatch()
  const { createTransaction } = useTransaction()
  const { categories } = useSelector((state) => state.dashboard)
  const { accounts } = useSelector((state) => state.accounts)
  const { budgets } = useSelector((state) => state.budgets)
  const {
    register,
    handleSubmit,
    control,
    setValue,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    console.log(data)
    if (!data.icon) {
      data.icon = 'CurrencyDollarIcon'
    }
    if (!data.description) {
      data.description = null
    }
    await createTransaction(data)
    // dispatch(setTransactionView(TRANSACTIONS_VIEWS.TRANSACTION_LIST))
  }
  const transaction_type = watch('type')
  return (
    <div className="pb-20">
      <Button
        variant="outlined"
        size="sm"
        className="flex items-center gap-2 rounded-full"
        onClick={() => dispatch(setTransactionView(TRANSACTIONS_VIEWS.TRANSACTION_LIST))}
      >
        <ChevronLeftIcon strokeWidth={4} className="size-4" /> Back
      </Button>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full lg:max-w-fit mt-10 mx-auto p-6 bg-white rounded-lg shadow-md"
        autoComplete="off"
      >
        <Typography variant="h4" color="blue-gray" className="mb-6">
          Transaction details
        </Typography>
        <DefaultInput
          className="mb-4"
          label="Title"
          name="title"
          required={true}
          register={register}
          validation={{ minLength: { value: 5, message: 'At least 15 characters' } }}
          error={errors.title}
        />
        <DefaultInput
          className="mb-4"
          label="Description"
          name="description"
          required={false}
          register={register}
          error={errors.description}
        />

        <div className="grid lg:grid-cols-2 gap-x-4">
          <CurrencyField className="mb-4" control={control} label="Amount" name="amount" required={true} />

          <SelectField
            control={control}
            className="mb-4"
            label="Type"
            name="type"
            required={false}
            register={register}
            error={errors.type}
            options={TRANSACTION_TYPES_OPTIONS}
          />
          <SelectField
            control={control}
            className="mb-4"
            label="Destination account"
            name="to_account_id"
            required={false}
            register={register}
            error={errors.to_account_id}
            options={accounts}
          />
          {transaction_type !== TRANSACTION_TYPES.INCOME && (
            <SelectField
              control={control}
              className="mb-4"
              label="Origin account"
              name="from_account_id"
              required={false}
              register={register}
              error={errors.from_account_id}
              options={accounts}
            />
          )}
          {transaction_type !== TRANSACTION_TYPES.INCOME && (
            <SelectField
              control={control}
              className="mb-4"
              label="Budget"
              name="budget_id"
              required={false}
              register={register}
              error={errors.budget_id}
              options={budgets}
            />
          )}

          <SelectField
            control={control}
            className="mb-4"
            label="Category"
            name="category_id"
            required={false}
            register={register}
            error={errors.description}
            options={categories}
          />
          <DefaultInput
            control={control}
            className="mb-4"
            type="date"
            label="Transaction date"
            name="transaction_date"
            required={true}
            register={register}
            error={errors.transaction_date}
          />
          <IconPicker onIconSelect={setValue} />
        </div>

        <Button variant="gradient" className="w-full mt-4 rounded-full" type="submit">
          Create Transaction
        </Button>
      </form>
    </div>
  )
}
