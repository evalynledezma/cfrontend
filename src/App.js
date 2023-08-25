import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import "./style/main.css";
import "./style/nav.css";
export default function App() {
  return (
    <div className="app">
      <div className="nav-wrapper">
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
        <NavLink to="/items" className="nav-link">
          Items
        </NavLink>
        <NavLink to="/add-item" className="nav-link">
          Add Item
        </NavLink>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
