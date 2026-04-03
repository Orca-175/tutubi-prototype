import styles from "./DashboardWindow.module.css";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { capitalize, removeRoutePrefix } from "../utils/strings.ts";

interface Props {
  children: ReactNode;
  title: string;
  route: string;
}

export function DashboardWindow({ children, title, route }: Props) {
  return (
    <div className={styles.dashboardWindow}>
      <div className={styles.windowHeader}>
        <div className={styles.windowTitle}>{title}</div>
        <Link to={route}><span className="text-button">Go to {capitalize(removeRoutePrefix(route))}</span></Link>
      </div>
      <div className={styles.tableContainer}>
        <table className={styles.dashboardTable}>
          {children}
        </table>
      </div>
    </div>
  );
} 
