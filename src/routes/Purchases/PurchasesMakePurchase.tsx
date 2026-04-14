import styles from "./PurchasesMakePurchase.module.scss";
import { InputDropdown } from "../../components/FormsControls/inputDropdown";
import { InputSubmit } from "../../components/FormsControls/InputSubmit";
import { InputText } from "../../components/FormsControls/InputText";
import { InputTextarea } from "../../components/FormsControls/InputTextArea";
import { PHPurchasesTable } from "../../components/Placeholders/PurchasesTable";

export function PurchasesMakePurchase() {
  const supplierChoices = [
    {label: "Hello farms", value: "value"},
    {label: "Goodbye farms", value: "value"},
  ];

  return (
    <>
      <form className="common-page-form">
        <div className={styles.makePurchaseForm}>
          <div>
            <InputText label="Product" />
            <InputText label="Price" />
            <InputText label="Quantity" />
            <InputDropdown label="Supplier" choices={supplierChoices}/>
          </div>
          <div>
            <InputTextarea label="Notes for supplier" />
          </div>
        </div>
        <div className={styles.makePurchaseFormButtons}>
          <InputSubmit label="Add Purchase and Email Supplier" />
          <InputSubmit label="Add Purchase" />
        </div>
      </form>
      <div className="table-card">
        <PHPurchasesTable />
      </div>
    </>
  );
}
