import React from "react";
import { useState } from "react";

// ben todo controlled form
function NewPlantForm({addNewPlant}) {

  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [price, setPrice] = useState("")

  function inputNameChange(e){
    setName(e.target.value);
    console.log(name)}

  function inputPriceChange(e){
    setPrice(e.target.value)
    console.log(price)}

  function inputImageChange(e){
    //console.log("formnameclicked")
    // console.log(e.target.value)
      setImage(e.target.value)
      console.log(image)
  }

  function formSumit(e){
    e.preventDefault()

    const newdata = {
      name: name,
      price: price,
      image: image
    }

    console.log(newdata)

    const url = "http://localhost:6001/plants"
    fetch(url,
      {
        method: "POST",
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(newdata)
      })
      .then((res) => res.json())
      .then((data) => addNewPlant(data))

    console.log("form was submitted")

    // Add to upper state/dom
    // addNewPlant(newdata)

    // reset the form
    setImage("")
    setName("")
    setPrice("")
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={formSumit}>
        <input onChange={inputNameChange} type="text" name="name" placeholder="Plant name" />
        <input onChange={inputImageChange} type="text" name="image" placeholder="Image URL" />
        <input onChange={inputPriceChange} type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;


// <input onChange={(e) => setPrice(parseFloat(e.target.value))} type="number" name="price" step="0.01" placeholder="Price" />