import React from "react";
// import { Link } from "react-router-dom";
import "../style/home.css";
// import flour from "../images/flour.jpg";

export default function Home() {
  return (
    <div className="home-wrapper">
      <h1>Welcome to my Wishlist!</h1>
      {/* <img src={flour} /> */}
      {/* <div className="home-buttons-wrapper">
        <Link to="/items">See all my Items</Link>
        <Link to="/add-items">Add an Item</Link>
      </div> */}
    </div>
  );
}
