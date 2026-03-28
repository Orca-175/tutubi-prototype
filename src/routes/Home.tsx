import "./Common.css";
import "./Home.css";
import ActiveOrdersPreview from "../components/ActiveOrdersPreview";
import DashboardWindow from "../components/DashboardWindow";
import { PAGE_NAMES } from "../constants/pageNames";
import { ROUTES } from "../constants/routes";
import { removeRoutePrefix } from "../utils/strings";
import ScheduledOrdersPreview from "../components/ScheduledOrdersPreview";

function Home() {
  return (
    <div className="main-page">
      <div className="page-header">{PAGE_NAMES.home}</div>
      <div className="dashboard">
        <div className="dashboard-main">
          <DashboardWindow title="Upcoming Orders" route={removeRoutePrefix(ROUTES.orders)}>
            <ScheduledOrdersPreview />
          </DashboardWindow>
          <DashboardWindow title="Active Orders" route={removeRoutePrefix(ROUTES.orders)}>
            <ActiveOrdersPreview />
          </DashboardWindow>
        </div>
        <div className="dashboard-sub">
          <DashboardWindow title="Upcoming Orders" route={removeRoutePrefix(ROUTES.orders)}>
            <ScheduledOrdersPreview />
          </DashboardWindow>
          <DashboardWindow title="Active Orders" route={removeRoutePrefix(ROUTES.orders)}>
            <ActiveOrdersPreview />
          </DashboardWindow>
        </div>
      </div>
    </div>
  );
}

export default Home;
