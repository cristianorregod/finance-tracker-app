import { setDefaultDialogOpen } from '@/modules/dashboard/slice'
import { Button, Dialog, DialogHeader, DialogBody, DialogFooter } from '@material-tailwind/react'
import { useDispatch } from 'react-redux'

export const DefaultDialog = ({ open }) => {
  const dispatch = useDispatch()

  return (
    <Dialog open={open} handler={() => dispatch(setDefaultDialogOpen(false))}>
      <DialogHeader>Its a simple dialog.</DialogHeader>
      <DialogBody>
        The key to more success is to have a lot of pillows. Put it this way, it took me twenty five years to get these
        plants, twenty five years of blood sweat and tears, and I&apos;m never giving up, I&apos;m just getting started.
        I&apos;m up to something. Fan luv.
      </DialogBody>
      <DialogFooter>
        <Button variant="text" color="red" onClick={() => dispatch(setDefaultDialogOpen(false))} className="mr-1">
          <span>Cancel</span>
        </Button>
        <Button variant="gradient" color="green" onClick={() => dispatch(setDefaultDialogOpen(false))}>
          <span>Confirm</span>
        </Button>
      </DialogFooter>
    </Dialog>
  )
}
