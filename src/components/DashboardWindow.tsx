import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { capitalize, removeRoutePrefix } from "../utils/strings.ts";
import "./DashboardWindow.css";

interface Props {
  children: ReactNode;
  title: string;
  route: string;
}

function DashboardWindow({ children, title, route }: Props) {
  return (
    <div className="dashboard-window">
      <div className="window-header">
        <div className="window-title">{title}</div>
        <Link to={route}><div className="text-button">Go to {capitalize(removeRoutePrefix(route))}</div></Link>
      </div>
      <div className="table-container">
        <table className="dashboard-table">
          {children}
        </table>
      </div>
    </div>
  );
} 

export default DashboardWindow;
