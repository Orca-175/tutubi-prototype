import styles from "./Layout.module.scss";
import { Outlet } from "react-router-dom";
import { Sidebar } from "../Sidebar/Sidebar";

export function Layout() {
  return (
    <div className={styles.appRoot}>
      <Sidebar />
      <div className={styles.mainPage}>
        <Outlet />
      </div>
    </div>
  ); 
}
