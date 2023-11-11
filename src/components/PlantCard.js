import React from "react";
import { useState } from "react";

function PlantCard({data}) {

  const [inStock, setInStock] = useState(true)

  const id = data.id
  const name = data.name
  const price = data.price
  const image = data.image

  function clickStockButton(){
    console.log("out stock button clcked")

    function changeInStock(){
      const newss = !inStock
      setInStock(newss)
    }
    changeInStock()
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
    </li>
  );
}

export default PlantCard;
