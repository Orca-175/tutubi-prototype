import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import './index.css';;
import Layout from './layout/Layout.tsx';
import Home from './routes/Home.tsx';
import Inventory from './routes/Inventory.tsx';
import { InventoryStock } from './routes/InventoryStock.tsx';
import { InventoryProducts } from './routes/InventoryProducts.tsx';
import Ledger from './routes/Ledger.tsx';
import Purchases from './routes/Purchases.tsx';
import Orders from './routes/Orders.tsx';
import Staff from './routes/Staff.tsx';
import Clients from './routes/Clients.tsx';
import NotFound from './routes/NotFound.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { 
        path: "inventory", 
        Component: Inventory,
        children: [
          { index: true, element: <Navigate to="stock" /> },
          { path: "stock", Component: InventoryStock},
          { path: "products", Component: InventoryProducts},
        ],
      },
      { path: "ledger", Component: Ledger },
      { path: "purchases", Component: Purchases },
      { path: "orders", Component: Orders },
      { path: "staff", Component: Staff },
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
