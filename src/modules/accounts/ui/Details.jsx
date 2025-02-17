import { ArrowLeftEndOnRectangleIcon } from '@heroicons/react/24/solid'
import { Button } from '@material-tailwind/react'
import { useDispatch } from 'react-redux'
import { setViewState } from '../slice'

export const AccountDetails = () => {
  const dispatch = useDispatch()

  return (
    <div>
      <Button
        variant="text"
        className="flex items-center gap-2 rounded-full"
        onClick={() => dispatch(setViewState('account-list'))}
      >
        <ArrowLeftEndOnRectangleIcon strokeWidth={4} className="size-6" /> Account List
      </Button>
      <h1>Detalles de la cuenta</h1>
    </div>
  )
}
