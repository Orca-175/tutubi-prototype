import styles from "./PurchasesTable.module.scss";
import { pesoSign } from "../../constants/symbols";
import { InputSubmit } from "../FormsControls/InputSubmit";

export function PHPurchasesTable() {
  return (
    <table>
      <thead>
        <tr>
          <th>Purchase ID</th>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Note</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>3</td>
          <td>Pigs</td>
          <td>{pesoSign}60,000</td>
          <td>2</td>
          <td>The quick brown fox jumps over the lazy dog.</td>
          <td>Pending</td>
          <td className={styles.confirmButtonColumn}><InputSubmit label="Confirm" /></td>
        </tr>
        <tr>
          <td>2</td>
          <td>Pigs</td>
          <td>{pesoSign}60,000</td>
          <td>2</td>
          <td>The quick brown fox jumps over the lazy dog.</td>
          <td>Pending</td>
          <td className={styles.confirmButtonColumn}><InputSubmit label="Confirm" /></td>
        </tr>
        <tr>
          <td>1</td>
          <td>Pigs</td>
          <td>{pesoSign}60,000</td>
          <td>2</td>
          <td>The quick brown fox jumps over the lazy dog.</td>
          <td>Confirmed</td>
        </tr>
      </tbody>
    </table>
  );
}
