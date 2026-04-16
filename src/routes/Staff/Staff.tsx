import { Outlet } from "react-router-dom";
import { PAGE_NAMES } from "../../constants/pageNames";
import { ROUTES } from "../../constants/routes";
import { SubrouteNavigation } from "../../components/SubrouteNavigation/SubrouteNavigation";

export function Staff() {
  const navList = [
    { name: PAGE_NAMES.employees, route: ROUTES.employees },
    { name: PAGE_NAMES.roles, route: ROUTES.roles },
  ];

  return (
    <>
      <div className="page-header">{PAGE_NAMES.staff}</div>
      <div className="page-layout">
        <SubrouteNavigation items={navList} />
        <Outlet />
      </div>
    </>
  );
}
