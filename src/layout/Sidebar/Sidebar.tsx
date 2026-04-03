import sidebarStyles from "./Sidebar.module.css";
import { capitalize } from "../../utils/strings";
import { NavigationButton } from "./NavigationButton";
import { PAGE_NAMES } from "../../constants/pageNames";
import { ROUTES } from "../../constants/routes";

function Sidebar() {
  return (
    <div className={sidebarStyles.sidebar}>
      <div className={sidebarStyles.sidebarContent}>
        <div className={sidebarStyles.brand}>
          Tutubi
        </div>
        <nav>
          <NavigationButton route={ROUTES.home}>{capitalize(PAGE_NAMES.home)}</NavigationButton>
          <hr />
          <NavigationButton route={ROUTES.inventory}>{capitalize(PAGE_NAMES.inventory)}</NavigationButton>
          <hr />
          <NavigationButton route={ROUTES.ledger}>{capitalize(PAGE_NAMES.ledger)}</NavigationButton>
          <hr />
          <NavigationButton route={ROUTES.purchases}>{capitalize(PAGE_NAMES.purchases)}</NavigationButton>
          <hr />
          <NavigationButton route={ROUTES.orders}>{capitalize(PAGE_NAMES.orders)}</NavigationButton>
          <hr />
          <NavigationButton route={ROUTES.staff}>{capitalize(PAGE_NAMES.staff)}</NavigationButton>
          <hr />
          <NavigationButton route={ROUTES.clients}>{capitalize(PAGE_NAMES.clients)}</NavigationButton>
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;