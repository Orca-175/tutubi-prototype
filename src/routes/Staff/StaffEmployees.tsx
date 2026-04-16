import { InputSubmit } from "../../components/FormsControls/InputSubmit";
import { InputText } from "../../components/FormsControls/InputText";
import { PHEmployeesTable } from "../../components/Placeholders/EmployeesTable";

export function StaffEmployees() {
  return (
    <>
      <form className="common-page-form">
        <div className="common-page-inputs-container">
          <InputText label="Placeholder" />
        </div>
        <InputSubmit label="Apply Filters" />
      </form>
      <div className="table-card">
        <PHEmployeesTable />
      </div>
    </>
  );
}
