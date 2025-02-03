import { Controller } from 'react-hook-form'
import { reverseFormat, formatCurrencyCOP } from '../helpers/currencyTools'
import { Input } from '@material-tailwind/react'

export const CurrencyField = ({ control, label, name, className = '', required = false }) => {
  return (
    <div className={className}>
      <Controller
        name={name}
        control={control}
        rules={{ required }}
        render={({ field, fieldState }) => (
          <Input
            fullWidth
            label={label}
            variant="outlined"
            {...field}
            onChange={(e) =>
              field.onChange(
                e.target.value.length === 1 ? parseFloat(e.target.value) : parseFloat(reverseFormat(e.target.value))
              )
            }
            value={isNaN(field.value) ? '' : formatCurrencyCOP(field.value)}
            error={fieldState.error}
          />
        )}
      />
    </div>
  )
}
