import styles from "./InventoryStocks.module.scss";
import { InputDropdown } from "../../components/FormsControls/inputDropdown";
import { InputSubmit } from "../../components/FormsControls/InputSubmit";
import { InputText } from "../../components/FormsControls/InputText";
import { InventoryStockTable } from "../../components/Placeholders/InventoryStockTable";

export function InventoryStock() {
  const productChoices = [
    {label: "Pork belly", value: "value"},
    {label: "Tapa", value: "value"},
  ];

  const batchNumberChoices = [
    {label: "20260406a", value: "value"},
    {label: "20260406b", value: "value"},
  ];

  const supplierChoices = [
    {label: "Hello farms", value: "value"},
    {label: "Goodbye farms", value: "value"},
  ];

  const expiryChoices = [
    {label: "Near expiry", value: "value"},
    {label: "Expired", value: "value"},
  ];

  return (
    <>
      <form>
        <div className={styles.filterInputsContainer}>
          <InputText label="Search Name"/>
          <InputDropdown label="Product Name" choices={productChoices} />
          <InputDropdown label="Batch number" choices={batchNumberChoices} />
          <InputDropdown label="Supplier" choices={supplierChoices} />
          <InputDropdown label="Expiry" choices={expiryChoices} />
        </div>
        <InputSubmit label="Apply Filters" />
        <InventoryStockTable />
      </form>
    </>
  );
}