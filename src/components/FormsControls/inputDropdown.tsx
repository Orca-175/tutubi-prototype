import styles from "./FormControls.module.scss";

interface Props {
  label: string;
  choices: {label: string, value: string }[];
}

export function InputDropdown({ label, choices }: Props) {
  const options = choices.map((choice) => (
    <option key={choice.label} value={choice.value}>{choice.label}</option>
  ));

  return (
    <div className={styles.inputContainer}>
      <span className={styles.inputLabel}>{label}: </span>
      <select className={styles.formInput}>
        <option value="">Filter by...</option>
        {options}
      </select>
    </div>
  );
}