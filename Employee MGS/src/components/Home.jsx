/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import axios from "axios";

const Home = () => {
  const [adminTotal, setAdminTotal] = useState(0);
  const [employeeTotal, setEmployeeTotal] = useState(0);
  const [salaryTotal, setSalaryTotal] = useState(0);
  const [admins, setAdmins] = useState([]);
  useEffect(() => {
    adminCount();
    employeeCount();
    salaryCount();
    AdminRecords();
  }, []);

  const AdminRecords = () => {
    axios.get("http://localhost:3000/auth/admin_records").then((result) => {
      if (result.data.Status) {
        setAdmins(result.data.Result);
      } else {
        alert(result.data.Error);
      }
    });
  };

  const adminCount = () => {
    axios.get("http://localhost:3000/auth/admin_count").then((result) => {
      if (result.data.Status) {
        setAdminTotal(result.data.Result[0].admin);
      }
    });
  };

  const employeeCount = () => {
    axios.get("http://localhost:3000/auth/employee_count").then((result) => {
      if (result.data.Status) {
        setEmployeeTotal(result.data.Result[0].employee);
      }
    });
  };

  const salaryCount = () => {
    axios.get("http://localhost:3000/auth/salary_count").then((result) => {
      if (result.data.Status) {
        setSalaryTotal(result.data.Result[0].salary);
      }
    });
  };

  return (
    <div>
      <div className="row m-5">
        <div
          className="card col-md-4 shadow bg-white rounded"
          style={{ width: "18rem" }}
        >
          <div style={{ fontSize: "30px" }}>
            <i className="bi bi-person-circle"></i>{" "}
          </div>
          <div className="card-body">
            <h5 className="card-title">Admin</h5>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item d-flex justify-content-between">
              <h5>Total: </h5>
              <h5>{adminTotal}</h5>
            </li>
          </ul>
        </div>

        <div
          className="card col-md-4 shadow bg-white rounded"
          style={{ width: "18rem" }}
        >
          <div style={{ fontSize: "30px" }}>
            <i className="bi bi-people"></i>{" "}
          </div>
          <div className="card-body">
            <h5 className="card-title">Employee</h5>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item d-flex justify-content-between">
              <h5>Total: </h5>
              <h5>{employeeTotal}</h5>
            </li>
          </ul>
        </div>

        <div
          className="card col-md-4 shadow bg-white rounded"
          style={{ width: "18rem" }}
        >
          <div style={{ fontSize: "30px" }}>
            <i className="bi bi-cash"></i>{" "}
          </div>
          <div className="card-body">
            <h5 className="card-title">Salary</h5>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item d-flex justify-content-between">
              <h5>Total: </h5>
              <h5>{salaryTotal}</h5>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-3 px-5 pt-3">
        <h3>list of admins</h3>
        <table className="table">
          <thead>
            <tr>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {admins.map((a) => (
              <tr>
                <td>{a.email}</td>
                <td>
                  <button className="btn btn-info btn-sm me-1">Edit</button>
                  <button className="btn btn-danger btn-sm">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
