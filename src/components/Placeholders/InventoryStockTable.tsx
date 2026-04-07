import styles from "./InventoryStockTable.module.scss"
import { pesoSign } from "../../constants/symbols";
import { tableKeys, data } from "../../utils/DeleteLater/mockDatabase";

export function InventoryStockTable() {
  return (
    <table className={styles.stockTable}>
      <tbody>
        <tr>
          {tableKeys.map((item) => (
            <th>{item}</th>
          ))}
        </tr>
        {data.map((data) => (
          <tr>
            {Object.entries(data).map((entry) => {
              if (entry[0] == "currentQuantity" || entry[0] == "outgoingQuantity") {
                return <td>{entry[1]}kg</td>;
              } else if (entry[0] == "price") {
                return <td>{pesoSign}{entry[1]}</td>;
              } else {
                return <td>{entry[1]}</td>
              }
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
