import "./Common.css";
import "./Home.css";
import DashboardWindow from "../components/DashboardWindow";
import { OrdersTablesPlaceholder } from "../components/OrdersTablesPlaceholder";
import { OtherTablesPlaceholder } from "../components/OtherTablesPlaceholder";
import { PAGE_NAMES } from "../constants/pageNames";
import { ROUTES } from "../constants/routes";

function Home() {
  return (
    <div className="main-page">
      <div className="page-header">{PAGE_NAMES.home}</div>
      <div className="dashboard">
        <div className="dashboard-main">
          <DashboardWindow title="Upcoming Orders" route={ROUTES.orders}>
            <OrdersTablesPlaceholder />
          </DashboardWindow>
          <DashboardWindow title="Active Orders" route={ROUTES.orders}>
            <OrdersTablesPlaceholder />
          </DashboardWindow>
        </div>
        <div className="dashboard-sub">
          <DashboardWindow title="New Inventory" route={ROUTES.inventory}>
            <OtherTablesPlaceholder />
          </DashboardWindow>
          <DashboardWindow title="Expiring Soon" route={ROUTES.ledger}>
            <OtherTablesPlaceholder />
          </DashboardWindow>
        </div>
      </div>
    </div>
  );
}

export default Home;
