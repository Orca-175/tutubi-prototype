import { InputSubmit } from "../../components/FormsControls/InputSubmit";
import { InputText } from "../../components/FormsControls/InputText";
import { PHRolesTable } from "../../components/Placeholders/RolesTable";

export function StaffRoles() {
  return (
    <>
      <form className="common-form">
        <div className="common-form-inputs-centered">
          <InputText label="Placeholder" />
        </div>
        <InputSubmit label="Apply Filters" />
      </form>
      <div className="table-card-centered">
        <PHRolesTable />
      </div>
    </>
  );
}
