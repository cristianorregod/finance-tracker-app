import { createRoot } from 'react-dom/client'
import './index.css'
import { AppRouter } from './routes/AppRouter'
import { Provider } from 'react-redux'
import { store } from './store'
import { QueryClientProvider, QueryClient } from 'react-query'
const queryClient = new QueryClient()
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <AppRouter />
    </QueryClientProvider>
  </Provider>
)
