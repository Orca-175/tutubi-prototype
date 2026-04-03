import layoutStyles from "./Layout.module.css";
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";

function Layout() {
  return (
    <div className={layoutStyles.appRoot}>
      <Sidebar />
      <div className={layoutStyles.mainPage}>
        <Outlet />
      </div>
    </div>
  ); 
}

export default Layout;