import { InputSubmit } from "../../components/FormsControls/InputSubmit";
import { InputText } from "../../components/FormsControls/InputText";
import { TransactionsTable } from "../../components/Placeholders/TransactionsTable";

export function LedgerTransactions() {
  return (
    <>
      <form className="common-page-form">
        <div className="common-page-inputs-container">
          <InputText label="Search Name"/>
        </div>
        <InputSubmit label="Apply Filters" />
      </form>
      <div className="table-card">
        <TransactionsTable />
      </div>
    </>
  );
}
