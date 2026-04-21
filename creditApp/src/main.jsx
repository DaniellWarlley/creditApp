import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import DashBoard from './pages/DashBoard.jsx'
import Movimentacoes from './pages/Movimentações.jsx'
import Services from './pages/Services.jsx'
import Team from './pages/Team.jsx'
import Clients from './pages/Clients.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: '/Home',
    element: <Home/>,
    children: [
      {
        path: 'Clientes',
        element: <Clients/>
      },
      {
        path: 'DashBoard',
        element: <DashBoard/>
      },
      {
        path: 'Movimentações',
        element: <Movimentacoes/>
      },
      {
        path: 'Serviços',
        element: <Services/>
      },
      {
        path: 'Equipe',
        element: <Team/>
      }
    ]
  }
])

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      refetchOnReconnect: true,
      refetchOnWindowFocus: true,
      retry: 2
    },
    mutations: {
      retry: 2
    }
  }
})

createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <StrictMode>
      <RouterProvider router={router}/>
    </StrictMode>
  </QueryClientProvider>
)
