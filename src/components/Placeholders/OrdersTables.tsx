import styles from "./OrdersTables.module.scss";

export function PHOrdersTables() {
  return (
    <table className={styles.ordersTable}>
    <thead>
      <tr>
        <th>Business</th>
        <th>Date Ordered</th>
        <th>Order</th>
        <th>Quantity</th>
        <th>Destination</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Business Name</td>
        <td>01-05-2026</td>
        <td>Pork Belly</td>
        <td>10kg</td>
        <td>1234-A Maria Clara St., Sampaloc, Manila</td>
        <td>Preparing</td>
      </tr>
      <tr>
        <td>Business Name</td>
        <td>01-05-2026</td>
        <td>Pork Belly</td>
        <td>10kg</td>
        <td>1234-A Maria Clara St., Sampaloc, Manila</td>
        <td>Preparing</td>
      </tr>
      <tr>
        <td>Business Name</td>
        <td>01-05-2026</td>
        <td>Pork Belly</td>
        <td>10kg</td>
        <td>1234-A Maria Clara St., Sampaloc, Manila</td>
        <td>Preparing</td>
      </tr>
      <tr>
        <td>Business Name</td>
        <td>01-05-2026</td>
        <td>Pork Belly</td>
        <td>10kg</td>
        <td>1234-A Maria Clara St., Sampaloc, Manila</td>
        <td>Preparing</td>
      </tr>
      <tr>
        <td>Business Name</td>
        <td>01-05-2026</td>
        <td>Pork Belly</td>
        <td>10kg</td>
        <td>1234-A Maria Clara St., Sampaloc, Manila</td>
        <td>Preparing</td>
      </tr>
      <tr>
        <td>Business Name</td>
        <td>01-05-2026</td>
        <td>Pork Belly</td>
        <td>10kg</td>
        <td>1234-A Maria Clara St., Sampaloc, Manila</td>
        <td>Preparing</td>
      </tr>
      <tr>
        <td>Business Name</td>
        <td>01-05-2026</td>
        <td>Pork Belly</td>
        <td>10kg</td>
        <td>1234-A Maria Clara St., Sampaloc, Manila</td>
        <td>Preparing</td>
      </tr>
      <tr>
        <td>...</td>
        <td>...</td>
        <td>...</td>
        <td>...</td>
        <td>...</td>
        <td>...</td>
      </tr>
    </tbody>
    </table>
  );
} 