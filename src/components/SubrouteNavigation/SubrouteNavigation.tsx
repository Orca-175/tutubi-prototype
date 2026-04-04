import { Fragment } from "react/jsx-runtime";
import { Link, useLocation } from "react-router-dom";
import styles from "./SubrouteNavigation.module.scss";

interface Props {
  items: { name: string, route: string }[];
}

export function SubrouteNavigation({ items }: Props) {
  const location = useLocation();

  const html = items.map((item, index) => {
    return (
      <Fragment key={item.name}>
        <Link to={item.route}>
          <span
            className={location.pathname != item.route ? " text-button text-button-inactive" : "text-button-active"}
          >
            {item.name}
          </span>
        </Link>
        {(index != items.length - 1) && <span>|</span>}
      </Fragment>
    );
  });

  return (
    <div className={styles.subrouteNav}>{html}</div>
  );
}
