import { InputDropdown } from "../../components/FormsControls/inputDropdown";
import { InputSubmit } from "../../components/FormsControls/InputSubmit";
import { InputText } from "../../components/FormsControls/InputText";
import { PHTransactionsTable } from "../../components/Placeholders/TransactionsTable";


export function LedgerManualEntry() {
  const transactionTypeChoices = [
  { label: "Sale", value: "value" },
  { label: "Purchase", value: "value" },
  ];

  return (
    <>
      <form className="common-page-form">
        <div className="common-page-inputs-container-centered">
          <InputText label="Transaction Date" />
          <InputDropdown label="Transaction Type" choices={transactionTypeChoices} />
          <InputText label="Party" />
          <InputText label="Price" />
          <InputText label="Product" />
          <InputText label="Quantity" />
        </div>
        <InputSubmit label="Record Transaction" />
      </form>
      <div className="table-card">
        <PHTransactionsTable />
      </div>
    </>
  );
}
