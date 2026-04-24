import { pesoSign } from "../../constants/symbols";

export function PHClientScheduledOrdersTable() {
  return (
    <table>
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Quantity</th>
          <th>Total Price</th>
          <th>Schedule</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Pork Belly</td>
          <td>43kg</td>
          <td>{pesoSign}12,900</td>
          <td>Monthly</td>
        </tr>
        <tr>
          <td>Pork Shoulder</td>
          <td>50kg</td>
          <td>{pesoSign}14,250</td>
          <td>Monthly</td>
        </tr>
      </tbody>
    </table>
  );
}