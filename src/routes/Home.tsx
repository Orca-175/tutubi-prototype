import "./Common.css";
import "./Home.css";
import ActiveOrdersPreview from "../components/ActiveOrdersPreview";
import DashboardWindow from "../components/DashboardWindow";
import { PAGE_NAMES } from "../constants/pageNames";
import { ROUTES } from "../constants/routes";
import ScheduledOrdersPreview from "../components/ScheduledOrdersPreview";

function Home() {
  return (
    <div className="main-page">
      <div className="page-header">{PAGE_NAMES.home}</div>
      <div className="dashboard">
        <div className="dashboard-main">
          <DashboardWindow title="Upcoming Orders" route={ROUTES.orders}>
            <ScheduledOrdersPreview />
          </DashboardWindow>
          <DashboardWindow title="Active Orders" route={ROUTES.orders}>
            <ActiveOrdersPreview />
          </DashboardWindow>
        </div>
        <div className="dashboard-sub">
          <DashboardWindow title="New Inventory" route={ROUTES.inventory}>
            <ScheduledOrdersPreview />
          </DashboardWindow>
          <DashboardWindow title="Ledger" route={ROUTES.ledger}>
            <ActiveOrdersPreview />
          </DashboardWindow>
        </div>
      </div>
    </div>
  );
}

export default Home;
