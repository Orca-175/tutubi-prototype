import styles from "./FormControls.module.scss";

interface Props {
  label: string;
  choices: {label: string, value: string }[];
}

export function InputDropdown({ label, choices }: Props) {
  const options = choices.map((choice) => (
    <option value={choice.value}>{choice.label}</option>
  ));

  return (
    <div className={styles.inputContainer}>
      <span className={styles.inputLabel}>{label}: </span>
      <select className={styles.formInput}>
        <option value="" selected></option>
        {options}
      </select>
    </div>
  );
}