import styles from "./FormControls.module.scss";

interface Props {
  label: string;
}

export function InputTextarea({ label }: Props) {
  return (
    <div className={styles.textareaContainer}>
      <span className={styles.inputLabel}>{label}: </span>
      <textarea rows={4} className={styles.formTextarea} />
    </div>
  );
}
