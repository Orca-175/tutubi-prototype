import styles from "./Authentication.module.scss";
import { InputSubmit } from "../../components/FormsControls/InputSubmit";
import { InputText } from "../../components/FormsControls/InputText";
import { Link } from "react-router-dom";

export function Register() {
  return (
    <div className={styles.authentication}>
      <form className={styles.form}>
        <div className={styles.formHeader}>Admin Registration</div>
        <div className={styles.formInputs}>
          <InputText label="Username" />
          <InputText label="Password" type="password" />
          <InputText label="Confirm Password" type="password" />
        </div>
        <span className={styles.switchFormLink}>
          <Link to="/login">Already have an account?</Link>
        </span>
        <div className={styles.submitLink}>
          <Link to="/login">Register</Link>
        </div>
      </form>
    </div> 
  );
}
