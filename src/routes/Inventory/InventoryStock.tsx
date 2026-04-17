import { InputDropdown } from "../../components/FormsControls/inputDropdown";
import { InputSubmit } from "../../components/FormsControls/InputSubmit";
import { PHInventoryStockTable } from "../../components/Placeholders/InventoryStockTable";

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
      <form className="common-form">
        <div className="common-form-inputs">
          <InputDropdown label="Product Name" choices={productChoices} />
          <InputDropdown label="Batch number" choices={batchNumberChoices} />
          <InputDropdown label="Supplier" choices={supplierChoices} />
          <InputDropdown label="Expiry" choices={expiryChoices} />
        </div>
        <InputSubmit label="Apply Filters" />
      </form>
      <div className="table-card">
        <PHInventoryStockTable />
      </div>
    </>
  );
}
