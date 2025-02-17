import { Input } from '@material-tailwind/react'

export const DefaultInput = ({
  label = 'Label',
  name = 'name',
  type = 'text',
  error = null,
  required = false,
  className = '',
  validation = null,
  register,
}) => {
  return (
    <div className={className}>
      <Input type={type} label={label} {...register(name, { required: required, ...validation })} error={error} />
      <small className="text-red-600">{error?.message}</small>
    </div>
  )
}
