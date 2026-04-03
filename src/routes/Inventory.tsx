import { Outlet } from "react-router-dom";
import { PAGE_NAMES } from "../constants/pageNames";
import { ROUTES } from "../constants/routes";
import { SubrouteNavigation } from "../components/SubrouteNavigation";

function Inventory() {
  const navList = [
    { name: PAGE_NAMES.stock, route: ROUTES.stock },
    { name: PAGE_NAMES.products, route: ROUTES.products },
  ];

  return (
    <>
      <div className="page-header">{PAGE_NAMES.inventory}</div>
      <div className="page-layout">
        <SubrouteNavigation items={navList} />
        <Outlet />
      </div>
    </>
  );
}

export default Inventory;
