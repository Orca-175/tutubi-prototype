import "./Common.css";
import "./Inventory.css";
import { PAGE_NAMES } from "../constants/pageNames";
import { ROUTES } from "../constants/routes";
import { SubrouteNavigation } from "../components/SubrouteNavigation";
import { Outlet } from "react-router-dom";

function Inventory() {
  const navList = [
    {name: PAGE_NAMES.stock, route: ROUTES.stock},
    {name: PAGE_NAMES.products, route: ROUTES.products},
  ];

  return (
    <div className="main-page">
      <div className="page-header">{PAGE_NAMES.inventory}</div>
        <div className="page-layout">
          <SubrouteNavigation items={navList} />
          <Outlet />
        </div>
    </div>
  );
}

export default Inventory;
