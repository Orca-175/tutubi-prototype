import { pesoSign } from "../../constants/symbols";

export function PHEmployeesTable() {
  return (
    <table>
      <thead>
        <tr>
          <th>Employee ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone Number</th>
          <th>Salary</th>
          <th>Role</th>
        </tr>
      </thead>
      <tbody>
        {
          [1, 2, 3, 4].map((index) => (
            <tr>
              <td>{index}</td>
              <td>John Tutubi</td>
              <td>johnTutubi@gmail.com</td>
              <td>09999999999</td>
              <td>{pesoSign}50,000</td>
              <td>Manager</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
}
