import { pesoSign } from "../../constants/symbols";
import styles from "./OrdersTable.module.scss";

export function PHOrdersTable() {
  return (
    <table className={styles.ordersTable}>
    <thead>
      <tr>
        <th>Order ID</th>
        <th>Order Type</th>
        <th>Business</th>
        <th>Date Ordered</th>
        <th>Product Ordered</th>
        <th>Quantity</th>
        <th>Total Price</th>
        <th>Destination</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>4</td>
        <td>Manual</td>
        <td>Business Name</td>
        <td>01-05-2026</td>
        <td>Pork Belly</td>
        <td>10kg</td>
        <td>{pesoSign}3000</td>
        <td>1234-A Maria Clara St., Sampaloc, Manila</td>
        <td>Preparing</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Manual</td>
        <td>Business Name</td>
        <td>01-05-2026</td>
        <td>Pork Belly</td>
        <td>10kg</td>
        <td>{pesoSign}3000</td>
        <td>1234-A Maria Clara St., Sampaloc, Manila</td>
        <td>Out for delivery</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Scheduled</td>
        <td>Business Name</td>
        <td>01-05-2026</td>
        <td>Pork Belly</td>
        <td>10kg</td>
        <td>{pesoSign}3000</td>
        <td>1234-A Maria Clara St., Sampaloc, Manila</td>
        <td>Completed</td>
      </tr>
      <tr>
        <td>1</td>
        <td>Manual</td>
        <td>Business Name</td>
        <td>01-05-2026</td>
        <td>Pork Belly</td>
        <td>10kg</td>
        <td>{pesoSign}3000</td>
        <td>1234-A Maria Clara St., Sampaloc, Manila</td>
        <td>Completed</td>
      </tr>
    </tbody>
    </table>
  );
} 