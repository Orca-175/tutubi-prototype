import "./Sidebar.css";
import NavigationButton from "../components/NavigationButton";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <div className="brand">
          Tutubi
        </div>
        <nav>
          <NavigationButton route="/">Home</NavigationButton>
          <hr />
          <NavigationButton route="/inventory">Inventory</NavigationButton>
          <hr />
          <NavigationButton route="/ledger">Ledger</NavigationButton>
          <hr />
          <NavigationButton route="/orders">Orders</NavigationButton>
          <hr />
          <NavigationButton route="/employees">Employees</NavigationButton>
          <hr />
          <NavigationButton route="/clients">Clients</NavigationButton>
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;