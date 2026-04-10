import styles from "./InventoryStockTable.module.scss";
import { pesoSign } from "../../constants/symbols";
import { parentTableKeys, childTableKeys, data, groupRows } from "../../utils/prototyping/mockDatabase";
import { useState, type ReactElement } from "react";

export function InventoryStockTable() {
  const tableData = groupRows(data);
  const tableRows: ReactElement[] = [];

  // On click on row, check if product name is in expanded array. If so, expand.
  const [expanded, setExpanded] = useState<string[]>([]);

  for (const [productName, productInfo] of Object.entries(tableData)) {
    tableRows.push(
      <>
        {/* Parent table row */}
        <tr 
          className={styles.parentTableRow} 
          key={productName + "parent"}
          onClick={() => {
            // Adds/removes productName from expanded
            if (expanded.includes(productName)) {
              setExpanded(expanded.toSpliced(expanded.indexOf(productName), 1));
            } else {
              setExpanded([...expanded, productName]);
            }
          }} 
        >
          <td>{productName}</td>
          <td>{productInfo.totalCurrentQuantity}</td>
          <td>{productInfo.totalOutgoingQuantity}</td>
          <td>{pesoSign}{productInfo.price}</td>
        </tr>

        {/* Child table row */}
        {
          expanded.includes(productName) && 
            <tr className={styles.childTableContainer} key={productName + "children"}> {/* Row of parent table that contains child table */}
              <td colSpan={4}>
                <div>
                  <table> { /* Actual child table */}
                    <thead>
                      <tr>
                        {childTableKeys.map((item) => (
                          <th key={item}>{item}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {productInfo.inventoryRows.map((row) => (
                        <tr key={row.batchNumber}>
                          {Object.entries(row).map((entry) => {
                            const [ columnName, value ] = entry;
                            if (columnName == "currentQuantity" || columnName == "outgoingQuantity") {
                              return <td key={row.batchNumber + columnName}>{value}kg</td>;
                            } else if (columnName == "price") {
                              return <td key={row.batchNumber + columnName}>{pesoSign}{value}</td>;
                            } else {
                              return <td key={row.batchNumber + columnName}>{value}</td>
                            }
                          })}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </td>
            </tr>
        }
      </>
    );
  }

  return (
    <table className={styles.stockTable}>
      <thead>
        <tr>
          {parentTableKeys.map((header) => (
            <th key={header}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableRows}
      </tbody>
    </table>
  );
}
