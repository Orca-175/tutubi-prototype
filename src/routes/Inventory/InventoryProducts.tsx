import { PHInventoryProductsTable } from "../../components/Placeholders/InventoryProductsTable";
import { InputSubmit } from "../../components/FormsControls/InputSubmit";
import { InputText } from "../../components/FormsControls/InputText";

export function InventoryProducts() {
  return (
    <>
      <form className="common-page-form">
        <div className="common-page-inputs-container">
          <InputText label="Product name" />
          <InputText label="Shelf life" />
          <InputText label="Price/kg" />
        </div>
          <InputSubmit label="Add Product" />
      </form>
      <div className="table-card">
        <PHInventoryProductsTable />
      </div>
    </>
  );
}
