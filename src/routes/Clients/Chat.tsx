import styles from "./Chat.module.scss";
import { LuPaperclip, LuSend } from "react-icons/lu";
import messageImagePlaceholder from "../../assets/placeholders/pastamania.jpg";

export function Chat() {
  return (
  <div className={styles.chat}>
    <div className={styles.chatsContainer}>
      <div className={styles.receivedChatsContainer}>
        <div>
          <img className={styles.senderPicture} src={messageImagePlaceholder} />
        </div>
        <div>
          <div className={styles.receivedChat}>
            I made my order last week and its status has stayed on pending ever since.
          </div>
          <div className={styles.receivedChat}>
            I want to talk to your manager.
          </div>
        </div>
      </div>
      <div className={styles.sentChatsContainer}>
        <div className={styles.sentChat}>
          I am the manager.
        </div>
      </div>
    </div>
    <div className={styles.messageInputContainer}>
      <div className={styles.messageInputIcon}><LuPaperclip size={20} /></div>
      <input type="text" className={styles.messageInput}></input>
      <div className={styles.messageInputIcon}><LuSend size={20} /></div>
    </div>
  </div>
  );
}