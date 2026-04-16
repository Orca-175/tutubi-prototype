import { Outlet } from "react-router-dom";
import { PAGE_NAMES } from "../../constants/pageNames";
import { ROUTES } from "../../constants/routes";
import { SubrouteNavigation } from "../../components/SubrouteNavigation/SubrouteNavigation";

export function Ledger() {
  const navList = [
    { name: PAGE_NAMES.transactions, route: ROUTES.transactions },
    { name: PAGE_NAMES.manualEntry, route: ROUTES.manualEntry },
  ];

  return (
    <>
      <div className="page-header">{PAGE_NAMES.ledger}</div>
      <div className="page-layout">
        <SubrouteNavigation items={navList} />
        <Outlet />
      </div>
    </>
  );
}
