import "./styles/common.scss";
import './styles/index.scss';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';

import { Layout } from './layout/Layout/Layout.tsx';
import { Home } from './routes/Home/Home.tsx';
import { Inventory } from './routes/Inventory/Inventory.tsx';
import { InventoryStock } from './routes/Inventory/InventoryStock.tsx';
import { InventoryProducts } from './routes/Inventory/InventoryProducts.tsx';
import { Ledger } from './routes/Ledger/Ledger.tsx';
import { LedgerTransactions } from "./routes/Ledger/LedgerTransactions.tsx";
import { LedgerManualEntry } from "./routes/Ledger/LedgerManualEntry.tsx";
import { Purchases } from './routes/Purchases/Purchases.tsx';
import { PurchasesMakePurchase } from "./routes/Purchases/PurchasesMakePurchase.tsx";
import { PurchasesSuppliers } from "./routes/Purchases/PurchasesSuppliers.tsx";
import { Orders } from './routes/Orders/Orders.tsx';
import { Staff } from './routes/Staff/Staff.tsx';
import { StaffEmployees } from "./routes/Staff/StaffEmployees.tsx";
import { StaffRoles } from "./routes/Staff/StaffRoles.tsx";
import { Clients } from './routes/Clients/Clients.tsx';
import { NotFound } from './routes/NotFound.tsx';
import { Login } from "./routes/Authentication/Login.tsx";
import { Register } from "./routes/Authentication/Register.tsx";

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
      {
        path: "ledger",
        Component: Ledger,
        children: [
          { index: true, element: <Navigate to="transactions" /> },
          { path: "transactions", Component: LedgerTransactions },
          { path: "manual-entry", Component: LedgerManualEntry },
        ],
      },
      {
        path: "purchases",
        Component: Purchases,
        children: [
          { index: true, element: <Navigate to="make-purchase" /> },
          { path: "make-purchase", Component: PurchasesMakePurchase },
          { path: "suppliers", Component: PurchasesSuppliers },
        ],
      },
      { path: "orders", Component: Orders },
      { 
        path: "staff", 
        Component: Staff,
        children: [
          { index: true, element: <Navigate to="employees" /> },
          { path: "employees", Component: StaffEmployees },
          { path: "roles", Component: StaffRoles },
        ],
      },
      { path: "clients", Component: Clients },
      { path: "*", Component: NotFound },
    ],
  },
  {
    path: "/register",
    Component: Register
  },
  {
    path: "/login",
    Component: Login
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
