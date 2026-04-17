import styles from "./StaffRoles.module.scss";
import { InputSubmit } from "../../components/FormsControls/InputSubmit";
import { InputText } from "../../components/FormsControls/InputText";
import { InputTextarea } from "../../components/FormsControls/InputTextArea";
import { PHRolesTable } from "../../components/Placeholders/RolesTable";
import { RolesFormTable } from "./RolesFormTable";

export function StaffRoles() {
  return (
    <>
      <form className="common-form">
        <div className={styles.roleInputs}>
          <div>
            <InputText label="Role" />
            <InputTextarea label="Description" />
          </div>
          <div>
          <RolesFormTable />
          </div>
        </div>
        <InputSubmit label="Add Role" />
      </form>
      <div className="table-card">
        <PHRolesTable />
      </div>
    </>
  );
}
