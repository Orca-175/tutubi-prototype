import { Outlet } from "react-router-dom";
import { PAGE_NAMES } from "../../constants/pageNames";
import { ROUTES } from "../../constants/routes";
import { SubrouteNavigation } from "../../components/SubrouteNavigation/SubrouteNavigation";

export function Purchases() {
  const navList = [
    { name: PAGE_NAMES.makePurchase, route: ROUTES.makePurchase },
    { name: PAGE_NAMES.suppliers, route: ROUTES.suppliers },
  ];

  return (
    <>
      <div className="page-header">{PAGE_NAMES.purchases}</div>
      <div className="page-layout">
        <SubrouteNavigation items={navList} />
        <Outlet />
      </div>
    </>
  );
}
