import { Input } from '@material-tailwind/react'

export const DefaultInput = ({
  label = 'Label',
  name = 'name',
  type = 'text',
  error = null,
  required = false,
  className = '',
  register,
}) => {
  return (
    <div className={className}>
      <Input type={type} label={label} {...register(name, { required: required })} error={error} />
    </div>
  )
}
