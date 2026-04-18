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
          <td>Live hogs</td>
          <td>{pesoSign}60,000</td>
          <td>2</td>
          <td>The quick brown foxes jumped over the lazy hog.</td>
          <td>Pending</td>
          <td>
            <div className={styles.confirmButtonColumn}>
              <InputSubmit label="Confirm" />
            </div>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>Live hogs</td>
          <td>{pesoSign}60,000</td>
          <td>2</td>
          <td>The quick brown foxes jumped over the lazy hog.</td>
          <td>Pending</td>
          <td>
            <div className={styles.confirmButtonColumn}>
              <InputSubmit label="Confirm" />
            </div>
          </td>
        </tr>
        <tr>
          <td>1</td>
          <td>Live hogs</td>
          <td>{pesoSign}60,000</td>
          <td>2</td>
          <td>The quick brown foxes jumped over the lazy hog.</td>
          <td>Confirmed</td>
        </tr>
      </tbody>
    </table>
  );
}
