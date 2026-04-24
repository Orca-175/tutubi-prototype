import styles from "./BusinessInformation.module.scss";
import messageImagePlaceholder from "../../assets/placeholders/pastamania.jpg";
import { PHClientScheduledOrdersTable } from "../../components/Placeholders/ClientsScheduledOrdersTable";

export function BusinessInformation() {
  return (
    <div className={styles.businessInformation}>
      <div className={styles.generalInformation}>
        <div>
          <img className={styles.businessImage} src={messageImagePlaceholder} />
        </div>
        <div>
          <div className={styles.informationRow}>
            <strong>Name: </strong>
            Business Name
          </div>
          <div className={styles.informationRow}>
            <strong>Address: </strong>
            1234-A Maria Clara St., Sampaloc, Manila
          </div>
          <div className={styles.informationRow}>
            <strong>Lifetime Orders: </strong>
            124
          </div>
        </div>
      </div>
      <div className={styles.scheduledOrders}>
        <strong>Scheduled Orders: </strong>
        <div className="table-card">
          <PHClientScheduledOrdersTable />
        </div>
      </div>
    </div>
  );
}