import styles from "./InventoryProductsTable.module.scss";
import { pesoSign } from "../../constants/symbols";

export function PHInventoryProductsTable() {
  return(
    <table className={styles.productsTable}>
      <thead>
        <tr>
          <th>Product name</th>
          <th>Shelf life</th>
          <th>Price/kg</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Pork Belly</td>
          <td>120 days</td>
          <td>{pesoSign}300</td>
        </tr>
        <tr>
          <td>Pork Belly</td>
          <td>120 days</td>
          <td>{pesoSign}300</td>
        </tr>
        <tr>
          <td>Pork Belly</td>
          <td>120 days</td>
          <td>{pesoSign}300</td>
        </tr>
        <tr>
          <td>Pork Belly</td>
          <td>120 days</td>
          <td>{pesoSign}300</td>
        </tr>
        <tr>
          <td>Pork Belly</td>
          <td>120 days</td>
          <td>{pesoSign}300</td>
        </tr>
        <tr>
          <td>Pork Belly</td>
          <td>120 days</td>
          <td>{pesoSign}300</td>
        </tr>
      </tbody>
    </table>
  );
}