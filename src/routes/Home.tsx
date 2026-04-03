import homeStyles from "./Home.module.css";
import { DashboardWindow } from "../components/DashboardWindow";
import { OrdersTablesPlaceholder } from "../components/OrdersTablesPlaceholder";
import { OtherTablesPlaceholder } from "../components/OtherTablesPlaceholder";
import { PAGE_NAMES } from "../constants/pageNames";
import { ROUTES } from "../constants/routes";

function Home() {
  return (
    <>
      <div className="page-header">{PAGE_NAMES.home}</div>
      <div className={homeStyles.dashboard}>
        <div className={homeStyles.dashboardMain}>
          <DashboardWindow title="Upcoming Orders" route={ROUTES.orders}>
            <OrdersTablesPlaceholder />
          </DashboardWindow>
          <DashboardWindow title="Active Orders" route={ROUTES.orders}>
            <OrdersTablesPlaceholder />
          </DashboardWindow>
        </div>
        <div className={homeStyles.dashboardSub}>
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

export default Home;
