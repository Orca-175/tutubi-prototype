import { useState } from "react";

export function PHRolesTable() {
  const [expanded, setExpanded] = useState<string[]>([]);
  const expandCallback = function (text: string) {
    if (expanded.includes(text)) {
      setExpanded(expanded.toSpliced(expanded.indexOf(text), 1));
    } else {
      setExpanded([...expanded, text]);
    }
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Role</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr 
          className="table-row-hoverable"
          onClick={() => expandCallback("manager")}
        >
          <td>Manager</td>
          <td>
            Business manager. Has full access to entire system.
          </td>
        </tr>
        { expanded.includes("manager") &&
          <tr>
            <td colSpan={2}>
              <table>
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
                    <td>True</td>
                    <td>True</td>
                    <td>True</td>
                  </tr>
                  <tr>
                    <td>Ledger</td>
                    <td>True</td>
                    <td>True</td>
                    <td>True</td>
                  </tr>
                  <tr>
                    <td>Purchases</td>
                    <td>True</td>
                    <td>True</td>
                    <td>True</td>
                  </tr>
                  <tr>
                    <td>Orders</td>
                    <td>True</td>
                    <td>True</td>
                    <td>True</td>
                  </tr>
                  <tr>
                    <td>Staff</td>
                    <td>True</td>
                    <td>True</td>
                    <td>True</td>
                  </tr>
                  <tr>
                    <td>Clients</td>
                    <td>True</td>
                    <td>True</td>
                    <td>True</td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        }
        <tr 
          className="table-row-hoverable"
          onClick={() => expandCallback("accountant")}
        >
          <td>Accountant</td>
          <td>
            Handles financial concerns of the business. May access Inventory, Ledger, and Purchases pages.
          </td>
        </tr>
        { expanded.includes("accountant") &&
          <tr>
            <td colSpan={2}>
              <table>
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
                    <td>True</td>
                    <td>True</td>
                    <td>True</td>
                  </tr>
                  <tr>
                    <td>Ledger</td>
                    <td>True</td>
                    <td>True</td>
                    <td>True</td>
                  </tr>
                  <tr>
                    <td>Purchases</td>
                    <td>True</td>
                    <td>True</td>
                    <td>False</td>
                  </tr>
                  <tr>
                    <td>Orders</td>
                    <td>False</td>
                    <td>False</td>
                    <td>False</td>
                  </tr>
                  <tr>
                    <td>Staff</td>
                    <td>False</td>
                    <td>False</td>
                    <td>False</td>
                  </tr>
                  <tr>
                    <td>Clients</td>
                    <td>False</td>
                    <td>False</td>
                    <td>False</td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        }
      </tbody>
    </table>
  );
}
