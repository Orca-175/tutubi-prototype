import styles from "./InventoryStocks.module.scss";
import { InputText } from "../../components/FormsControls/InputText";

export function InventoryStock() {
  return (
    <>
      <form className={styles.filtersForm}>
        <InputText />
        <InputText />
        <InputText />
        <InputText />
        <InputText />
        <InputText />
      </form>
    </>
  );
}