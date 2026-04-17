import styles from "./LedgerTransactions.module.scss";
import { InputDropdown } from "../../components/FormsControls/inputDropdown";
import { InputSubmit } from "../../components/FormsControls/InputSubmit";
import { InputText } from "../../components/FormsControls/InputText";
import { PHTransactionsTable } from "../../components/Placeholders/TransactionsTable";
import { LuCircleCheckBig } from "react-icons/lu";

export function LedgerTransactions() {
  const productChoices = [
    {label: "Pork Belly", value: "value"},
    {label: "Tapa", value: "value"},
  ];

  const transactionTypeChoices = [
    {label: "Sale", value: "value"},
    {label: "Purchase", value: "value"},
  ];

  return (
    <>
      <div className="common-forms-container">
        <form className="common-form">
          <div className="common-form-inputs">
            <InputText label="Party" />
            <InputDropdown label="Transaction Type" choices={transactionTypeChoices} />
            <InputDropdown label="Product" choices={productChoices} />
            <InputText label="Transaction Date" />
          </div>
          <InputSubmit label="Apply Filters" />
        </form>
        <form className={styles.verificationSection}>
          <div className={styles.verificationCard}>
            <p>Last automatic verification: 04-08-2026.</p>
            <div className={styles.verificationResult}>
              <LuCircleCheckBig className={styles.resultIcon} />
              <p>No issues found!</p>
            </div>
            <p>Automatic verifications are set to occur weekly. To verify now, click the button below.</p>
          </div>
          <InputSubmit label="Verify Now" />
        </form>
      </div>
      <div className="table-card">
        <PHTransactionsTable />
      </div>
    </>
  );
}
