// @components
import { Card, Input, Button, CardBody, CardHeader, Typography } from '@material-tailwind/react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import useLogin from '../hooks'

// @icons

export function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const { login } = useLogin()
  const isAuthenticated = useSelector((state) => state.dashboard.auth.isAuthenticated)
  const onSubmit = async (e) => {
    e.preventDefault()
    console.log({ email, password })
    await login({ email, password })
  }
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/')
    }
  }, [isAuthenticated, navigate])
  return (
    <section className="px-8">
      <div className="container mx-auto h-screen grid place-items-center">
        <Card shadow={false} className="md:px-24 md:py-14 py-8 border border-gray-300">
          <CardHeader shadow={false} floated={false} className="text-center">
            <Typography variant="h1" color="blue-gray" className="mb-4 !text-2xl lg:text-4xl">
              Finance App Tracker
            </Typography>
            <Typography className="!text-gray-600 text-sm lg:text-[18px] font-normal md:max-w-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
            </Typography>
          </CardHeader>
          <CardBody>
            <form onSubmit={onSubmit} className="flex flex-col gap-4 md:mt-12">
              <div>
                <Input
                  id="email"
                  label="Your Email"
                  size="lg"
                  type="email"
                  value={email}
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full placeholder:opacity-100  border-t-blue-gray-200"
                />
              </div>
              <div>
                <Input
                  id="password"
                  label="Password"
                  size="lg"
                  type="password"
                  value={password}
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full placeholder:opacity-100  border-t-blue-gray-200"
                  autoComplete="off"
                />
              </div>
              <Button size="lg" color="gray" fullWidth type="submit">
                Login
              </Button>
            </form>
          </CardBody>
        </Card>
      </div>
    </section>
  )
}
