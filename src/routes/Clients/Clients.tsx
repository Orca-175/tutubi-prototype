import styles from "./Clients.module.scss";
import { Chat } from "./Chat";
import { PHMessages } from "../../components/Placeholders/Messages";
import { PAGE_NAMES } from "../../constants/pageNames";
import { useState } from "react";

export function Clients() {
  const [cardPage, setCardPage] = useState("chat");

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
              <span 
                onClick={() => {setCardPage("chat")}}
                className={cardPage != "chat" ? "text-button text-button-inactive" : "text-button-active"}
              >
                Chat
              </span>
              <span>|</span>
              <span 
                onClick={() => {setCardPage("businessInfo")}}
                className={cardPage != "businessInfo" ? "text-button text-button-inactive" : "text-button-active"}
              >
                Business Information
              </span>
            </div>
            { cardPage == "chat" ? 
              <Chat /> :
              <h1>Hello, World!</h1>
            }
          </div>
        </div>
      </div>
    </>
  );
}
