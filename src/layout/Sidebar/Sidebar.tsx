import styles from "./Sidebar.module.scss";
import { capitalize } from "../../utils/strings";
import { NavigationButton } from "./NavigationButton";
import { PAGE_NAMES } from "../../constants/pageNames";
import { ROUTES } from "../../constants/routes";

export function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarContent}>
        <div className={styles.brand}>
          Tutubi
        </div>
        <nav className={styles.navigation}>
          <ul className={styles.navigationButtons}>
            <li><NavigationButton route={ROUTES.home}>{capitalize(PAGE_NAMES.home)}</NavigationButton></li>
            <hr />
            <li><NavigationButton route={ROUTES.inventory}>{capitalize(PAGE_NAMES.inventory)}</NavigationButton></li>
            <hr />
            <li><NavigationButton route={ROUTES.ledger}>{capitalize(PAGE_NAMES.ledger)}</NavigationButton></li>
            <hr />
            <li><NavigationButton route={ROUTES.purchases}>{capitalize(PAGE_NAMES.purchases)}</NavigationButton></li>
            <hr />
            <li><NavigationButton route={ROUTES.orders}>{capitalize(PAGE_NAMES.orders)}</NavigationButton></li>
            <hr />
            <li><NavigationButton route={ROUTES.staff}>{capitalize(PAGE_NAMES.staff)}</NavigationButton></li>
            <hr />
            <li><NavigationButton route={ROUTES.clients}>{capitalize(PAGE_NAMES.clients)}</NavigationButton></li>
            <div className={styles.logoutButtonContainer}>
              <hr />
              <li>
                <NavigationButton route={ROUTES.login}>Logout</NavigationButton>
              </li>
            </div>
          </ul>
        </nav>
      </div>
    </div>
  );
}
