import styles from "./FormControls.module.scss";

interface Props {
  label: string;
  type?: string;
}

export function InputText({ label, type = "text" }: Props) {
  return (
    <div className={styles.inputContainer}>
      <span className={styles.inputLabel}>{label}: </span>
      <input className={styles.formInput} type={type} />
    </div>
  );
}
