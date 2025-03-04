import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { toast } from "react-toastify";

import "./AdminDashboard.css";

function AdminDashboard() {
  const [busData, setBusData] = useState([]);
  const [change, setChange] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:2222/Added_Busses")
      .then((res) => {
        setBusData(res.data);
      })
      .catch((err) => console.error(err));
  }, [change]);

  const deleteBusHandler = (id) => {
    axios
      .delete(`http://localhost:2222/Added_Busses/${id}`)
      .then((res) => {
        toast.success("Bus removed");
        setChange(change + 1);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="admin-dashboard-container">
      <div className="admin-dashboard-table-container">
        <table className=" admin-dashboard-table">
          <thead>
            <tr className="admin-dashboard-table-heading">
              <th>Sl No.</th>
              <th>Bus Image</th>
              <th>Bus Name</th>
              <th>Bus Regd. Number</th>
              <th>No. of Seats</th>
              <th>Bus Route</th>
              <th>Bus Arrival</th>
              <th>Bus Departure</th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody className="admin-dashboard-table-body">
            {busData.map((bus) => {
              return (
                <tr key={bus.id}>
                  <td>{bus.id}</td>
                  <td>
                    <img
                      style={{
                        height: "20rem",
                        aspectRatio: "3/2",
                        objectFit: "cover",
                      }}
                      src={bus.busImage}
                      alt=""
                    />
                  </td>
                  <td>{bus.busName}</td>
                  <td>{bus.busNumber}</td>
                  <td>{bus.numberOfSeats}</td>
                  <td>
                    <p>From: {bus.busFrom}</p>
                    <p>To: {bus.busTo}</p>
                  </td>
                  <td>{bus.busArrival}</td>
                  <td>{bus.busDeparture}</td>
                  <td>
                    <Link state={bus} to={`/adminhomepage/viewbus/${bus.id}`}>
                      <button className="btn btn-view-bus">View Bus</button>
                    </Link>
                  </td>
                  <td>
                    <Link state={bus} to={`/adminhomepage/editbus/${bus.id}`}>
                      <button className="btn btn-edit-bus">Edit Bus</button>
                    </Link>
                  </td>
                  <td>
                    <Link>
                      <button
                        className="btn btn-delete-bus"
                        onClick={() => deleteBusHandler(bus.id)}
                      >
                        Delete Bus
                      </button>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminDashboard;
