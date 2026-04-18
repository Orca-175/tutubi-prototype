import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { capitalize, removeRoutePrefix } from "../../utils/strings.ts";

interface Props {
  children: ReactNode;
  title: string;
  route: string;
}

export function DashboardCard({ children, title, route }: Props) {
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-title">{title}</div>
        <Link to={route}><span className="text-button">Go to {capitalize(removeRoutePrefix(route))}</span></Link>
      </div>
      {children}
    </div>
  );
} 
