import styles from "./NavigationButton.module.css"
import { Link } from "react-router-dom";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  route: string;
}

export function NavigationButton({ children, route }: Props) {
  return (
    <Link to={route}>
      <div className={styles.navItem}>
        {children}
      </div>
    </Link>
  );
}
