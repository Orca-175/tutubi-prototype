import "./Common.css";
import { PAGE_NAMES } from "../constants/pageNames";

function Clients() {
  return (
    <div className="main-page">
      <div className="page-header">{PAGE_NAMES.clients}</div>
    </div>
  );
}

export default Clients;
