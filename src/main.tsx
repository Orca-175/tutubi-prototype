import "./common.css";
import './index.css';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';

import { Layout } from './layout/Layout/Layout.tsx';
import { Home } from './routes/Home/Home.tsx';
import { Inventory } from './routes/Inventory/Inventory.tsx';
import { InventoryStock } from './routes/Inventory/InventoryStock.tsx';
import { InventoryProducts } from './routes/Inventory/InventoryProducts.tsx';
import { Ledger } from './routes/Ledger/Ledger.tsx';
import { Purchases } from './routes/Purchases/Purchases.tsx';
import { Orders } from './routes/Orders/Orders.tsx';
import { Staff } from './routes/Staff/Staff.tsx';
import { Clients } from './routes/Clients/Clients.tsx';
import { NotFound } from './routes/NotFound.tsx';

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
          { path: "stock", Component: InventoryStock },
          { path: "products", Component: InventoryProducts },
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
