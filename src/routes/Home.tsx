import "./Common.css";
import DashboardWindow from "../components/DashboardWindow";

function Home() {
  return (
    <div className="main-page">
      <div className="page-header">Home</div>
      <div>
        <DashboardWindow title="Upcoming Orders">
          <tbody>
            <tr>
              <th>Business</th>
              <th>Schedule</th>
              <th>Order</th>
              <th>Quantity</th>
            </tr>
            <tr>
              <td>Hello</td>
              <td>Hello</td>
              <td>Hello</td>
              <td>Hello</td>
            </tr>
            <tr>
              <td>Hello</td>
              <td>Hello</td>
              <td>Hello</td>
              <td>Hello</td>
            </tr>
          </tbody>
        </DashboardWindow>
      </div>
    </div>
  );
}

export default Home;
