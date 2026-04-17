import { InputDropdown } from "../../components/FormsControls/inputDropdown";
import { InputSubmit } from "../../components/FormsControls/InputSubmit";
import { InputText } from "../../components/FormsControls/InputText";
import { PHEmployeesTable } from "../../components/Placeholders/EmployeesTable";

export function StaffEmployees() {
  const roleChoices = [
    {label: "Manager", value: "value"},
    {label: "Accountant", value: "value"},
  ];

  return (
    <>
    <div className="common-forms-container">
      <form className="common-form">
        <div className="common-form-inputs">
          <InputText label="Name" />
          <InputDropdown label="Role" choices={roleChoices} />
        </div>
        <InputSubmit label="Apply Filters" />
      </form>
      <form className="common-form">
        <div className="common-form-inputs">
          <InputText label="Name" />
          <InputText label="Email" />
          <InputText label="Phone Number" />
          <InputText label="Salary" />
        </div>
        <InputSubmit label="Add Employee" />
      </form>
    </div>
      <div className="table-card">
        <PHEmployeesTable />
      </div>
    </>
  );
}
