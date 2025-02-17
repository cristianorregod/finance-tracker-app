import { setLogin, setLoading, setError } from '@/modules/dashboard/slice'
import { useDispatch } from 'react-redux'
import AuthApi from '../api'
import { toast } from 'sonner'

const useLogin = () => {
  const dispatch = useDispatch()
  const login = async (user) => {
    dispatch(setLoading(true))
    try {
      const loginResponse = await AuthApi.login(user)
      dispatch(setLogin({ user: user.email, token: loginResponse?.token, isAuthenticated: true }))
      dispatch(setLoading(true))
    } catch (error) {
      console.log('error', error)
      toast.error('Failed to login')
      dispatch(setError(error.message))
      dispatch(setLoading(false))
    }
  }
  return { login }
}
export default useLogin
