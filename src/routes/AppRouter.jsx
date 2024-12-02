import { BrowserRouter, Routes, Route } from 'react-router'
import { HomeView } from '../views/HomeView'
import { Layout } from '../containers/Layout'

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
