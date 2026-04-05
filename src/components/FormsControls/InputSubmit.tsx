import styles from "./FormControls.module.scss";

interface Props {
  label: string;
}

export function InputSubmit({ label }: Props) {
  return (
    <input className={styles.formSubmit} type="submit" value={label} />
  );
}