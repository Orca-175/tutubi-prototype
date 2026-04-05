
import styles from "./FormControls.module.scss";

interface Props {
  label: string;
}

export function InputCheckbox({ label }: Props) {
  return (
    <div className={styles.inputContainer}>
      <span className={styles.inputLabel}>{label}: </span>
      <span className={styles.checkboxContainer}>
        <input className={styles.checkbox} type="checkbox" />
      </span>
    </div>
  );
}