import { Option, Select } from '@material-tailwind/react'
import React from 'react'
import { Controller } from 'react-hook-form'

export const SelectField = ({
  options = [],
  name,
  label,
  required = false,
  className = '',
  optionValue = 'id',
  error = null,
  control,
}) => {
  return (
    <div className={className}>
      <Controller
        name={name}
        control={control}
        rules={{ required }}
        render={({ field, fieldState }) => (
          <div>
            <Select
              label={label}
              {...field}
              onChange={(value) => field.onChange(value)} // Update form state
              value={field.value} // Bind form state
              error={fieldState.error}
            >
              {options.map((option) => (
                <Option key={option[optionValue]} value={String(option[optionValue])}>
                  {option.name}
                </Option>
              ))}
            </Select>
            <small className="text-red-600">{fieldState.error}</small>
          </div>
        )}
      />
      {/* <Select name={name} label={label} {...register(name, { required: required })}>
        {options.map((option) => (
          <Option key={option[optionValue]} value={String(option[optionValue])}>
            {option.name}
          </Option>
        ))}
      </Select> */}
    </div>
  )
}
