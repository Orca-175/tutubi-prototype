import "./Common.css";
import { PAGE_NAMES } from "../constants/pageNames";

function Orders() {
  return (
    <div className="main-page">
      <div className="page-header">{PAGE_NAMES.orders}</div>
    </div>
  );
}

export default Orders;
