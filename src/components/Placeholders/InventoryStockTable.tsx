import styles from "./InventoryStockTable.module.scss";
import { pesoSign } from "../../constants/symbols";
import { parentTableKeys, childTableKeys, data, groupRows } from "../../utils/prototyping/mockDatabase";
import { Fragment, useState, type ReactElement } from "react";

export function PHInventoryStockTable() {
  const tableData = groupRows(data);
  const tableRows: ReactElement[] = [];

  // On click on row, check if product name is in expanded array. If so, expand.
  const [expanded, setExpanded] = useState<string[]>([]);

  for (const [productName, productInfo] of Object.entries(tableData)) {
    tableRows.push(
      <Fragment key={productName}>
        {/* Parent table row */}
        <tr 
          className={styles.parentTableRow} 
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
            // Row of parent table that contains child table
            <tr className={styles.childTableContainer}> 
              <td colSpan={4}>
                <div>
                  {/* Actual child table */}
                  <table> 
                    <thead>
                      <tr>
                        {childTableKeys.map((item) => (
                          <th>{item}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {productInfo.inventoryRows.map((row) => (
                        <tr>
                          {Object.entries(row).map((entry) => {
                            const [ columnName, value ] = entry;
                            if (columnName == "currentQuantity" || columnName == "outgoingQuantity") {
                              return <td>{value}kg</td>;
                            } else if (columnName == "price") {
                              return <td>{pesoSign}{value}</td>;
                            } else {
                              return <td>{value}</td>
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
      </Fragment>
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
