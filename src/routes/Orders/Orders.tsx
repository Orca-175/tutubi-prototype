import { InputDropdown } from "../../components/FormsControls/inputDropdown";
import { InputSubmit } from "../../components/FormsControls/InputSubmit";
import { InputText } from "../../components/FormsControls/InputText";
import { PAGE_NAMES } from "../../constants/pageNames";
import { PHOrdersTable } from "../../components/Placeholders/OrdersTable";

export function Orders() {
  const productChoices = [
    {label: "Pork belly", value: "value"},
    {label: "Tapa", value: "value"},
  ];

  const orderTypeChoices = [
    {label: "Manual", value: "value"},
    {label: "Scheduled", value: "value"},
  ];

  const orderStatusChoices = [
    {label: "Preparing", value: "value"},
    {label: "Out for delivery", value: "value"},
    {label: "Completed", value: "value"},
  ];

  return (
    <>
      <div className="page-header">{PAGE_NAMES.orders}</div>
      <div className="page-layout">
        <div className="page-subheader">Client Orders</div>
        <form className="common-page-form">
          <div className="common-page-inputs-container">
            <InputText label="Search Client"/>
            <InputDropdown label="Product" choices={productChoices} />
            <InputDropdown label="Order Type" choices={orderTypeChoices} />
            <InputDropdown label="Order Status" choices={orderStatusChoices} />
          </div>
          <InputSubmit label="Apply Filters" />
        </form>
          <div className="table-card">
            <PHOrdersTable />
          </div>
      </div>
    </>
  );
}
