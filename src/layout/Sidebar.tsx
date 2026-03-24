import "./Sidebar.css";
import NavigationButton from "../components/NavigationButton";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <div className="brand">
          Brand
        </div>
        <nav>
          <NavigationButton>Home</NavigationButton>
          <hr />
          <NavigationButton>Inventory</NavigationButton>
          <hr />
          <NavigationButton>Ledger</NavigationButton>
          <hr />
          <NavigationButton>Orders</NavigationButton>
          <hr />
          <NavigationButton>Employees</NavigationButton>
          <hr />
          <NavigationButton>Clients</NavigationButton>
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;