import { Button } from '@material-tailwind/react'
import { Typography } from '@material-tailwind/react'
import { useDispatch } from 'react-redux'

export const ViewHeader = ({ title, showButton = false, onChangeView }) => {
  const dispatch = useDispatch()
  return (
    <header className="flex justify-between items-center mb-8">
      <Typography variant="h1" color="blue-gray" className="!text-xl lg:!text-3xl">
        {title}s
      </Typography>
      {showButton && (
        <Button
          variant="gradient"
          className="text-[11px] lg:text-sm rounded-full"
          onClick={() => dispatch(onChangeView)}
        >
          New {title}
        </Button>
      )}
    </header>
  )
}
