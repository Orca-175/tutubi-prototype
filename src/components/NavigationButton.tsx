import { Link } from "react-router-dom";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  route: string;
}

function NavigationButton({ children, route }: Props) {
  return (
    <Link to={route}>
      <div className="nav-item">
        {children}
      </div>
    </Link>
  );
}

export default NavigationButton