import React, { useState } from "react";
import "../style/add-item.css";

export default function AddItem() {
  const [nameInput, setNameInput] = useState();
  const [priceInput, setPriceInput] = useState();

  const handleSubmit = () => {
    // get endpoint to put in fetch parentesis with eidan!!!
    fetch("LINK FOR API HERE", {
      methos: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        name: nameInput,
        price: parseFloat(priceInput),
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
      <button onClick={handleSubmit()}>Add</button>
    </div>
  );
}
