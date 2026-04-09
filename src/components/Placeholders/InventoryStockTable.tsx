import styles from "./InventoryStockTable.module.scss";
import { pesoSign } from "../../constants/symbols";
import { parentTableKeys, childTableKeys, data, groupRows } from "../../utils/prototyping/mockDatabase";
import type { ReactElement } from "react";

export function InventoryStockTable() {
  const tableData = groupRows(data);
  const finalTableRows: ReactElement[] = [];

  for (const [productName, productInfo] of Object.entries(tableData)) {

    finalTableRows.push(
      <tr>
        <td>{productName}</td>
        <td>{productInfo.totalCurrentQuantity}</td>
        <td>{productInfo.totalOutgoingQuantity}</td>
        <td>{pesoSign}{productInfo.price}</td>
      </tr>
    );
  }

  return (
    <table className={styles.stockTable}>
      <tbody>
        <tr>
          {parentTableKeys.map((item) => (
            <th key={item}>{item}</th>
          ))}
        </tr>
        {finalTableRows}
      </tbody>
    </table>
  );
}

// const tableData = data;

// return (
//   <table className={styles.stockTable}>
//     <tbody>
//       <tr>
//         {childTableKeys.map((item) => (
//           <th key={item}>{item}</th>
//         ))}
//       </tr>
//       {tableData.map((tableData) => (
//         <tr key={tableData.batchNumber}>
//           {Object.entries(tableData).map((entry) => {
//             const [ columnName, value ] = entry;

//             if (columnName == "currentQuantity" || columnName == "outgoingQuantity") {
//               return <td key={tableData.batchNumber + columnName}>{value}kg</td>;
//             } else if (columnName == "price") {
//               return <td key={tableData.batchNumber + columnName}>{pesoSign}{value}</td>;
//             } else {
//               return <td key={tableData.batchNumber + columnName}>{value}</td>
//             }
//           })}
//         </tr>
//       ))}
//     </tbody>
//   </table>
// );
