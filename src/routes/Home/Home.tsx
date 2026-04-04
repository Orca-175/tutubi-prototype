import styles from "./Home.module.css";
import { DashboardWindow } from "./DashboardWindow";
import { OrdersTablesPlaceholder } from "../../components/Placeholders/OrdersTablesPlaceholder";
import { OtherTablesPlaceholder } from "../../components/Placeholders/OtherTablesPlaceholder";
import { PAGE_NAMES } from "../../constants/pageNames";
import { ROUTES } from "../../constants/routes";

export function Home() {
  return (
    <>
      <div className="page-header">{PAGE_NAMES.home}</div>
      <div className={styles.dashboard}>
        <div className={styles.dashboardMain}>
          <DashboardWindow title="Upcoming Orders" route={ROUTES.orders}>
            <OrdersTablesPlaceholder />
          </DashboardWindow>
          <DashboardWindow title="Active Orders" route={ROUTES.orders}>
            <OrdersTablesPlaceholder />
          </DashboardWindow>
        </div>
        <div className={styles.dashboardSub}>
          <DashboardWindow title="New Inventory" route={ROUTES.inventory}>
            <OtherTablesPlaceholder />
          </DashboardWindow>
          <DashboardWindow title="Expiring Soon" route={ROUTES.ledger}>
            <OtherTablesPlaceholder />
          </DashboardWindow>
        </div>
      </div>
    </>
  );
}
