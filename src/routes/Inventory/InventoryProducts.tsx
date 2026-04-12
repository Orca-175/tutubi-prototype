import styles from "./Inventory.module.scss";
import { InventoryProductsTable } from "../../components/Placeholders/InventoryProductsTable";
import { InputSubmit } from "../../components/FormsControls/InputSubmit";
import { InputText } from "../../components/FormsControls/InputText";

export function InventoryProducts() {
  return (
    <>
      <form className="commonPageForm" action="">
        <div className="commonPageInputsContainer">
          <InputText label="Product name" />
          <InputText label="Shelf life" />
          <InputText label="Price/kg" />
        </div>
          <InputSubmit label="Add Product" />
      </form>
      <div className={styles.tableCard}>
        <InventoryProductsTable />
      </div>
    </>
  );
}
