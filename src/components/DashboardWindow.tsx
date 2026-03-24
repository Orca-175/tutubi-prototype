import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import "./DashboardWindow.css"

interface Props {
  children: ReactNode;
  title: string;
}

function DashboardWindow({ children, title }: Props) {
  return (
    <div className="dashboard-window">
      <div className="window-header">
        <div className="window-title">{title}</div>
        <Link to="orders">
            
        </Link>
      </div>
      <div className="dashboard-content">
        <table className="dashboard-table">
          {children}
        </table>
      </div>
    </div>
  );

} 

export default DashboardWindow;