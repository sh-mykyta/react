import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Sidebar() {
  return (
    <div
      className="d-flex flex-column p-3 border-end bg-light"
      style={{
        width: "260px",
        height: "100vh",
        position: "fixed",
        left: 0,
        top: 0,
      }}
    >
      <div className="d-flex align-items-center mb-4">
        <i className="bi bi-grid fs-3"></i>
      </div>

        <ul className="nav nav-pills flex-column mb-auto">
            <li className="nav-item mb-2">
                <a href="#" className="nav-link link-dark">
                <i className="bi bi-speedometer2 me2"></i>
                Dashboard
                </a>
            </li>
                 <li className="nav-item mb-2">
                <a href="#" className="nav-link link-dark">
                <i className="bi bi-people me-2"></i>
                Users
                </a>
            </li>
            <li className="nav-item mb-2">
                <a href="#" className="nav-link link-dark">
                <i className="bi bi-list-task me-2"></i>
                Tasks
                </a>
            </li>
            <li className="nav-item mb-2">
                <a href="#" className="nav-link link-dark">
                <i className="bi bi-gear me-2"></i>
                Settings
                </a>
            </li>
        </ul>
        <div className="mt-auto">
            <div className="small mb-2">
                Username
                <a href="#" className="nav-link link-dark"></a>
                <i className="bi bi-box-arrow-left me-2"></i>
                Logout
            </div>
        </div>
    </div>
  );
}
