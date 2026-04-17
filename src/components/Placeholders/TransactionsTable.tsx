import { pesoSign } from "../../constants/symbols";

export function PHTransactionsTable() {
  return (
    <table>
      <thead>
        <tr>
          <th>Ledger ID</th>
          <th>Transaction Date</th>
          <th>Transaction Type</th>
          <th>Party</th>
          <th>Price</th>
          <th>Product</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>6</td>
          <td>04-15-2026</td>
          <td>Sale</td>
          <td>Business Name</td>
          <td>{pesoSign}1200</td>
          <td>Pork Belly</td>
          <td>4kg</td>
        </tr>
        <tr>
          <td>5</td>
          <td>04-15-2026</td>
          <td>Sale</td>
          <td>Business Name</td>
          <td>{pesoSign}1200</td>
          <td>Pork Belly</td>
          <td>4kg</td>
        </tr>
        <tr>
          <td>4</td>
          <td>04-15-2026</td>
          <td>Sale</td>
          <td>Business Name</td>
          <td>{pesoSign}1200</td>
          <td>Pork Belly</td>
          <td>4kg</td>
        </tr>
        <tr>
          <td>3</td>
          <td>04-14-2026</td>
          <td>Purchase</td>
          <td>Farm Name</td>
          <td>{pesoSign}1200</td>
          <td>Pigs</td>
          <td>2</td>
        </tr>
        <tr>
          <td>2</td>
          <td>04-14-2026</td>
          <td>Sale</td>
          <td>Business Name</td>
          <td>{pesoSign}1200</td>
          <td>Pork Belly</td>
          <td>4kg</td>
        </tr>
        <tr>
          <td>1</td>
          <td>04-13-2026</td>
          <td>Purchase</td>
          <td>Farm Name</td>
          <td>{pesoSign}1200</td>
          <td>Pigs</td>
          <td>2</td>
        </tr>
      </tbody>
    </table>
  );
}