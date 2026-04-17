import { InputSubmit } from "../../components/FormsControls/InputSubmit";
import { InputText } from "../../components/FormsControls/InputText";
import { PHSuppliersTable } from "../../components/Placeholders/SuppliersTable";

export function PurchasesSuppliers() {
  return (
    <>
      <form className="common-form">
        <div className="common-form-inputs-centered">
          <InputText label="Supplier Name" />
          <InputText label="Email Address" />
          <InputText label="Phone Number" />
        </div>
        <InputSubmit label="Add Supplier" />
      </form>
      <div className="table-card-centered">
        <PHSuppliersTable />
      </div>
    </>
  );
}
