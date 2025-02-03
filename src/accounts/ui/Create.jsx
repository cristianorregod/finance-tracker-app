import { useForm } from 'react-hook-form'
import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import { Button } from '@material-tailwind/react'
import { IconPicker } from '@/shared/components/IconPicker'
import { Typography } from '@material-tailwind/react'
import { DefaultInput } from '@/shared/components/DefaultInput'
import { useDispatch } from 'react-redux'
import useAccount from '../hooks'
import { setViewState } from '../slice'

export const CreateAccount = () => {
  const dispatch = useDispatch()
  const { createAccount } = useAccount()
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    data.current_balance = data.initial_balance
    if (!data.icon) {
      data.icon = 'CurrencyDollarIcon'
    }

    await createAccount(data)
    dispatch(setViewState('account-list'))
  }
  return (
    <div>
      <Button
        variant="outlined"
        size="sm"
        className="flex items-center gap-2 rounded-full"
        onClick={() => dispatch(setViewState('account-list'))}
      >
        <ChevronLeftIcon strokeWidth={4} className="size-4" /> Back
      </Button>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md mt-10 mx-auto p-6 bg-white rounded-lg shadow-md"
        autoComplete="off"
      >
        <Typography variant="h4" color="blue-gray" className="mb-6">
          Account details
        </Typography>
        <DefaultInput
          className="mb-4"
          label="Account name"
          name="name"
          required={true}
          register={register}
          error={errors.name}
        />
        <DefaultInput
          className="mb-4"
          label="Account type"
          name="account_type"
          required={true}
          register={register}
          error={errors.account_type}
        />
        <div className="grid grid-cols-2 gap-4">
          <DefaultInput
            className="mb-4"
            label="Initial balance"
            name="initial_balance"
            required={true}
            register={register}
            error={errors.name}
          />

          <IconPicker onIconSelect={setValue} />
        </div>
        <Button variant="gradient" className="w-full mt-4 rounded-full" type="submit">
          Create Account
        </Button>
      </form>
    </div>
  )
}
