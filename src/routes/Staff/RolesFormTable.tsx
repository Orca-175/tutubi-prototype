import styles from "./RolesFormTable.module.scss";

export function RolesFormTable() {
  return (
    <table className={styles.formTable}>
      <thead>
        <tr>
          <th>Page</th>
          <th>View</th>
          <th>Read</th>
          <th>Write</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Inventory</td>
          <td><input type="checkbox" /></td>
          <td><input type="checkbox" /></td>
          <td><input type="checkbox" /></td>
        </tr>
        <tr>
          <td>Ledger</td>
          <td><input type="checkbox" /></td>
          <td><input type="checkbox" /></td>
          <td><input type="checkbox" /></td>
        </tr>
        <tr>
          <td>Purchases</td>
          <td><input type="checkbox" /></td>
          <td><input type="checkbox" /></td>
          <td><input type="checkbox" /></td>
        </tr>
        <tr>
          <td>Orders</td>
          <td><input type="checkbox" /></td>
          <td><input type="checkbox" /></td>
          <td><input type="checkbox" /></td>
        </tr>
        <tr>
          <td>Staff</td>
          <td><input type="checkbox" /></td>
          <td><input type="checkbox" /></td>
          <td><input type="checkbox" /></td>
        </tr>
        <tr>
          <td>Clients</td>
          <td><input type="checkbox" /></td>
          <td><input type="checkbox" /></td>
          <td><input type="checkbox" /></td>
        </tr>
      </tbody>
    </table>
  );
}
