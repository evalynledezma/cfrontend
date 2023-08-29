import React, { useState, useEffect } from "react";
import axios from "axios";

import "../style/items.css";

export default function Items() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("https://capback-96c2a9a7317f.herokuapp.com/item/get")
      .then((response) => {
        setItems(response.data);
        console.log(response);
      })
      .catch(function (error) {
        console.log("this ya error", error);
      });
  }, [setItems]);

  return (
    <div>
      {console.log("here nword", items)}
      {items?.map((item) => {
        return (
          <div className="item-wrapper">
            <h3 className="title"> {item.name}</h3>
            <p className="description">${item.price.toFixed(2)}</p>
            <a href={item.url}>LINK</a>
          </div>
        );
      })}
    </div>
  );
}
