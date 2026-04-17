export function PHRolesTable() {
  return (
    <table>
      <thead>
        <tr>
          <th>Role</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Manager</td>
          <td>
            Business manager. Has full access to entire system.
          </td>
        </tr>
        <tr>
          <td>Accountant</td>
          <td>
            Handles financial concerns of the business. May access Inventory, Ledger, and Purchases pages.
          </td>
        </tr>
      </tbody>
    </table>
  );
}
