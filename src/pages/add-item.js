import React, { useState } from "react";
import "../style/add-item.css";

export default function AddItem() {
  const [nameInput, setNameInput] = useState("");
  const [priceInput, setPriceInput] = useState("");
  const [urlInput, setURLInput] = useState("");

  const handleSubmit = () => {
    // get endpoint to put in fetch parentesis with eidan!!!
    fetch("https://capback-96c2a9a7317f.herokuapp.com/item/add", {
      method: "POST",
      mode: "cors",
      headers: {
        "content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        name: nameInput,
        price: parseFloat(priceInput),
        url: urlInput,
      }),
    })
      .then((response) => response.json())
      .catch((error) => {
        console.log("Error adding your item", error);
      });
  };

  return (
    <div className="add-item-wrapper">
      <h1>Add an Item</h1>
      <input
        type="text"
        placeholder="name"
        name="nameInput"
        value={nameInput}
        onChange={(event) => setNameInput(event.target.value)}
      />
      <input
        type="text"
        placeholder="price"
        name="priceInput"
        value={priceInput}
        onChange={(event) => setPriceInput(event.target.value)}
      />
      <input
        type="text"
        placeholder="url"
        name="priceInput"
        value={urlInput}
        onChange={(event) => setURLInput(event.target.value)}
      />
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
}
