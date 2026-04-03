import { Link } from "react-router-dom";

interface Props {
  items: { name: string, route: string }[];
}

export function SubrouteNavigation({ items }: Props) {
  const html = items.map((item) => (
    <Link to={item.route}><span className="text-button">{item.name}</span></Link>
  ));

  return (
    <div className="subroute-nav">{html}</div>
  );
}
