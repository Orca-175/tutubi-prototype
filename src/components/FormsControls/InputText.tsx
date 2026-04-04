import styles from "./FormControls.module.scss";

export function InputText() {
  return (
    <div className={styles.inputContainer}>
      <span className={styles.inputLabel}>Text: </span>
      <input className={styles.formInput} type="text" />
    </div>
  );
}