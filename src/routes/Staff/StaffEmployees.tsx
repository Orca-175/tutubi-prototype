import { InputDropdown } from "../../components/FormsControls/inputDropdown";
import { InputSubmit } from "../../components/FormsControls/InputSubmit";
import { InputText } from "../../components/FormsControls/InputText";
import { PHEmployeesTable } from "../../components/Placeholders/EmployeesTable";

export function StaffEmployees() {
  const roleChoices = [
    {label: "Admin", value: "value"},
    {label: "Manager", value: "value"},
  ];

  return (
    <>
      <form className="common-page-form">
        <div className="common-page-inputs-container">
          <InputText label="Name" />
          <InputDropdown label="Role" choices={roleChoices} />
        </div>
        <InputSubmit label="Apply Filters" />
      </form>
      <div className="table-card">
        <PHEmployeesTable />
      </div>
    </>
  );
}
