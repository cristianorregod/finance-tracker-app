import { Spinner } from '@material-tailwind/react'

export const Loader = () => {
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        zIndex: 1000,
        background: '#f3f3f3  ',
        opacity: 0.8,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Spinner className="size-12 text-lemon-dark" />
      <h5 className="font-bold ">Loading...</h5>
    </div>
  )
}
