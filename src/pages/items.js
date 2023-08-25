import React, { useState, useEffect } from "react";
import axios from "axios";

import "../style/items.css";

export default function Items() {
  const [items, setItems] = useState();

  useEffect(() => {
    axios
      .get("add url")
      .then((response) => response.json())
      .then((data) => {
        setItems(data);
        console.log(data);
      })
      .catch(function (error) {
        console.log("this ya error", error);
      });
  }, [setItems]);

  return (
    <div>
      {items?.map((item) => {
        return (
          <div className="item-wrapper">
            <img url={item.url} />
            <h3 className="title"> {item.name}</h3>
            <p className="description">${item.price.toFixed(2)}</p>
          </div>
        );
      })}
    </div>
  );
}
