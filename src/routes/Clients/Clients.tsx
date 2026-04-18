import styles from "./Clients.module.scss";
import { PHMessages } from "../../components/Placeholders/Messages";
import { PAGE_NAMES } from "../../constants/pageNames";

export function Clients() {
  return (
    <>
      <div className="page-header">{PAGE_NAMES.clients}</div>
      <div className="page-layout">
        <div className="page-subheader">Businesses</div>
        <div className={styles.layoutContainer}>
          <div className={styles.messagesCard}>
            <PHMessages />
            <PHMessages />
            <PHMessages />
            <PHMessages />
            <PHMessages />
            <PHMessages />
            <PHMessages />
          </div>
          <div className="card">
            <div className={styles.clientsCardHeader}>
              <span>Chat</span>
              <span>|</span>
              <span className="text-button text-button-inactive">Business Information</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
