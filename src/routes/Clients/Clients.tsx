import styles from "./Clients.module.scss";
import { Chat } from "./Chat";
import { PHMessages } from "../../components/Placeholders/Messages";
import { PAGE_NAMES } from "../../constants/pageNames";

export function Clients() {
  return (
    <>
      <div className="page-header">{PAGE_NAMES.clients}</div>
      <div className="page-layout">
        <div className="page-subheader">Businesses</div>
        <div className={styles.pageCards}>
          <div className={styles.clientListCard}>
            <PHMessages />
            <PHMessages />
            <PHMessages />
            <PHMessages />
            <PHMessages />
            <PHMessages />
            <PHMessages />
          </div>
          <div className={styles.mainSectionCard}>
            <div className={styles.mainSectionHeader}>
              <span className={styles.headerBusinessName}>Business Name</span>
              <span>Chat</span>
              <span>|</span>
              <span className="text-button text-button-inactive">Business Information</span>
            </div>
            <Chat />
          </div>
        </div>
      </div>
    </>
  );
}
