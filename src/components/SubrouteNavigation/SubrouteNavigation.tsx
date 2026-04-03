import { Link, useLocation } from "react-router-dom";
import styles from "./SubrouteNavigation.module.css";

interface Props {
  items: { name: string, route: string }[];
}

export function SubrouteNavigation({ items }: Props) {
  const location = useLocation();

  const html = items.map((item, index) => {
    return (
      <>
        <Link to={item.route}>
          <span
            className={`text-button ${location.pathname != item.route && "text-button-inactive"}`}
          >
            {item.name}
          </span>
        </Link>
        {(index != items.length - 1) && <span>|</span>}
      </>
    );
  });

  return (
    <div className={styles.subrouteNav}>{html}</div>
  );
}
