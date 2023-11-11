import React from "react";
import { useState } from "react";

function PlantCard({data, handleDeletePlant, onUpdatePlant}) {

  const id = data.id
  const name = data.name
  const price = data.price
  const image = data.image
  
  const [inStock, setInStock] = useState(true)
  const [updatedPrice, setUpdatedPrice] = useState(price);



  function clickStockButton(){
    console.log("out stock button clcked")

    function changeInStock(){
      const newss = !inStock
      setInStock(newss)
    }
    changeInStock()
  }

  function handleDeleteClick() {
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "DELETE",
    });
    handleDeletePlant(id);
  }

  function handlePriceFormSubmit(e) {
    e.preventDefault();
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ price: updatedPrice }),
    })
      .then((r) => r.json())
      .then((updatedPlant) => {
        onUpdatePlant(updatedPlant);
      });
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {inStock ? (
        <button onClick={clickStockButton} className="primary">In Stock</button>
      ) : (
        <button onClick={clickStockButton} >Out of Stock</button>
      )}
      <button onClick={handleDeleteClick}>Delete</button>
      <form onSubmit={handlePriceFormSubmit}>
        <input
          type="number"
          step="0.01"
          placeholder="New price..."
          value={updatedPrice}
          onChange={(e) => setUpdatedPrice(parseFloat(e.target.value))}
        />
        <button type="submit">Update Price</button>
      </form>
    </li>
  );
}

export default PlantCard;
