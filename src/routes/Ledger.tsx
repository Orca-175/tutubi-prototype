import "./Common.css";
import { PAGE_NAMES } from "../constants/pageNames";

function Ledger() {
  return (
    <div className="main-page">
      <div className="page-header">{PAGE_NAMES.LEDGER}</div>
    </div>
  );
}

export default Ledger;
