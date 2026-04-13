import styles from "./Messages.module.scss";
import messageImagePlaceholder from "../../assets/placeholders/pastamania.jpg";
import { LuEllipsisVertical } from "react-icons/lu";

export function PHMessages() {
  return(
    <div className={styles.messageRow}>
      <div>
        <img className={styles.messageImage} src={messageImagePlaceholder} alt="" />
      </div>
      <div>
        <div className={styles.businessName}>Business Name</div>
        <div className={styles.messagePreviewContainer}>
          <span className={styles.messagePreview}>Message preview</span>
          <span>13:00</span>
        </div>
      </div>
      <div>
        <div>
          <LuEllipsisVertical />
        </div>
      </div>
    </div>
  );
}