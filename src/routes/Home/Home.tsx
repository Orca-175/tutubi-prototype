import styles from "./Home.module.scss";
import { DashboardCard } from "./DashboardCard";
import { PHMessages } from "../../components/Placeholders/Messages";
import { PHOrdersTables } from "../../components/Placeholders/OrdersTables";
import { PAGE_NAMES } from "../../constants/pageNames";
import { pesoSign } from "../../constants/symbols";
import { ROUTES } from "../../constants/routes";

export function Home() {
  return (
    <>
      <div className="page-header">{PAGE_NAMES.home}</div>
      <div className={styles.dashboard}>
        <div className={styles.highlightCards}>
          <DashboardCard title="Upcoming Orders" route={ROUTES.orders}>
            <p className={styles.cardContent}>27</p>
          </DashboardCard>
          <DashboardCard title="Near Expiry" route={ROUTES.inventory}>
            <p className={styles.cardContent}>12</p>
          </DashboardCard>
          <DashboardCard title="Total Worth" route={ROUTES.inventory}>
            <p className={styles.cardContent}>{pesoSign}312,025</p>
          </DashboardCard>
        </div>
        <div>
          <DashboardCard title="Active Orders" route={ROUTES.orders}>
            <PHOrdersTables/>
          </DashboardCard>
        </div>
        <div>
          <DashboardCard title="Messages" route={ROUTES.clients}>
            <div className={styles.messagesRowsContainer}>
              <PHMessages />
              <PHMessages />
              <PHMessages />
              <PHMessages />
              <PHMessages />
              <PHMessages />
              <PHMessages />
            </div>
          </DashboardCard>
        </div>
      </div>
    </>
  );
}
