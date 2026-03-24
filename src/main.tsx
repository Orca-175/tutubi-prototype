import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Layout from './routes/Layout.tsx'
import Sidebar from './layout/Sidebar.tsx'
import Home from './routes/Home.tsx'
import Inventory from './routes/Inventory.tsx'
import Ledger from './routes/Ledger.tsx'
import Orders from './routes/Orders.tsx'
import Employees from './routes/Employees.tsx'
import Clients from './routes/Clients.tsx'
import NotFound from './routes/NotFound.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "inventory", Component: Inventory },
      { path: "ledger", Component: Ledger },
      { path: "orders", Component: Orders },
      { path: "employees", Component: Employees },
      { path: "clients", Component: Clients },
      { path: "*", Component: NotFound },
    ],
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
