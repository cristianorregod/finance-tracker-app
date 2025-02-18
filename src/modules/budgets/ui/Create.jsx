import { DefaultInput } from '@/shared/components/DefaultInput'
import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import { Button } from '@material-tailwind/react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { setViewState } from '../slice'
import { Typography } from '@material-tailwind/react'
import { IconPicker } from '@/shared/components/IconPicker'
import { BUDGETS_VIEWS } from '@/shared/helpers/constants'
import useBudget from '../hooks'

export const CreateBudget = () => {
  const dispatch = useDispatch()
  const { createBudget } = useBudget()
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm()
  const onSubmit = async (data) => {
    data.remaining_amount = data.amount
    if (!data.icon) {
      data.icon = 'CurrencyDollarIcon'
    }
    await createBudget(data)
    dispatch(setViewState('budget-list'))

    console.log(data)
  }
  return (
    <div>
      <Button
        variant="outlined"
        size="sm"
        className="flex items-center gap-2 rounded-full"
        onClick={() => dispatch(setViewState(BUDGETS_VIEWS.BUDGET_LIST))}
      >
        <ChevronLeftIcon strokeWidth={4} className="size-4" /> Back
      </Button>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md mt-10 mx-auto p-6 bg-white rounded-lg shadow-md"
        autoComplete="off"
      >
        <Typography variant="h4" color="blue-gray" className="mb-6">
          Budget details
        </Typography>
        <DefaultInput
          className="mb-4"
          label="Budget name"
          name="name"
          required={true}
          register={register}
          error={errors.name}
        />
        <DefaultInput
          className="mb-4"
          label="Description"
          name="description"
          required={true}
          register={register}
          error={errors.description}
        />
        <div className="grid lg:grid-cols-2 lg:gap-4">
          <DefaultInput
            className="mb-4"
            label="Budget amount"
            name="amount"
            required={true}
            register={register}
            error={errors.amount}
          />
          <IconPicker onIconSelect={setValue} />
        </div>
        <Button variant="gradient" className="w-full mt-4 rounded-full" type="submit">
          Create Budget
        </Button>
      </form>
    </div>
  )
}
